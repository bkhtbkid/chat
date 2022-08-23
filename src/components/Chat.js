import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../index";
import {
    collection,
    addDoc,
    orderBy,
    serverTimestamp,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";
import { query } from "firebase/database";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Chat() {
    const { db, auth } = useContext(Context);
    const [user] = useAuthState(auth);
    const scroll = useRef();
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);
    const [, loading] = useCollectionData(
        query(collection(db, "messages"), orderBy("createdAt"))
    );

    useEffect(() => {
        onSnapshot(
            query(collection(db, "messages"), orderBy("createdAt")),
            (snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
            }
        );
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp(),
        });
        setValue("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    const removeMessages = async (id) => {
        const data = doc(db, "messages", id);
        await deleteDoc(data);
    };

    if (loading) {
        return <Container>Загрузка...</Container>;
    }

    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                // position: "relative",
            }}
        >
            <Grid
                container
                margin={"110px 0"}
                display={"flex"}
                flexDirection={"column"}
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`messages ${
                            message.uid === auth.currentUser.uid
                                ? "flexDirection"
                                : ""
                        }`}
                    >
                        {message.text !== "" && (
                            <>
                                <div
                                    className={`message ${
                                        message.uid === auth.currentUser.uid
                                            ? "sent"
                                            : "received"
                                    }`}
                                >
                                    <img src={message.photoURL} alt="" />
                                    <p>{message.text}</p>
                                </div>
                                <Button
                                    variant={"outlined"}
                                    onClick={() => removeMessages(message.id)}
                                >
                                    Удалить
                                </Button>
                            </>
                        )}
                    </div>
                ))}
            </Grid>
            <div>
                <form onSubmit={sendMessage}>
                    <div className="sendMessage">
                        <TextField
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Начать ввод..."
                            style={{
                                padding: 10,
                                width: "80%",
                            }}
                        />
                        <Button variant="contained" type="submit">
                            Отправить
                        </Button>
                    </div>
                </form>
            </div>
            <div ref={scroll}></div>
        </Container>
    );
}

export default Chat;

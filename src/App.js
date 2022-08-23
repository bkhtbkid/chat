import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "./index";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Chat from "./components/Chat";
import Instruction from "./components/Instruction";

function App() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <>
            {user ? (
                <>
                    <SignOut />
                    <Chat />
                </>
            ) : (
                <>
                    <SignIn />
                    <Instruction />
                </>
            )}
        </>
    );
}

export default App;

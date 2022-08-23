import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function Instruction() {
    return (
        <Container>
            <Grid
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                paddingTop={"20px"}
            >
                <h1 style={{ marginBottom: "20px" }}>
                    Чат в реальном времени.
                </h1>
                <p style={{ marginBottom: "20px" }}>
                    Зайдите через Гугл аккаунт чтобы попасть в чат.
                </p>
                <p style={{ marginBottom: "20px" }}>
                    Советую зайти с нескольких разных браузеров, чтобы писать с
                    нескольких аккаунтов.
                </p>
                <p>
                    Сообщения сохраняются в Firebase Firestore Database. Чтобы
                    удалить сообщения, нажмите на кнопку "Удалить".
                </p>
            </Grid>
        </Container>
    );
}

export default Instruction;

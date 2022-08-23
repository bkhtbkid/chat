import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Context } from "../index";
import { AppBar, Toolbar, Button, Grid } from "@mui/material";

function SignIn() {
    const { auth } = useContext(Context);

    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                >
                    <Button variant="outlined" color="inherit" onClick={signIn}>
                        Log in
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default SignIn;

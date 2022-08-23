import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@mui/material";
import { auth } from "../firebase";

function SignOut() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                >
                    <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() => auth.signOut()}
                    >
                        Log out
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default SignOut;

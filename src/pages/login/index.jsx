import {Button, Typography} from "@mui/material";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import React from "react";
function Login() {
  const auth = getAuth();
  const handleLoginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const repsonse = await signInWithPopup(auth, provider);
    console.log("repsonse", repsonse);
  };
  return (
    <>
      <Typography>Hello</Typography>
      <Button onClick={handleLoginGoogle} variant="outlined">
        Login With Google
      </Button>
    </>
  );
}

export default Login;

import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((e) => alert(e.message));
  };
  return (
    <LoginContainer>
      <LoginInnerCotnainer>
        <img
          src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt="logo"
        />
        <h1>Sign in </h1>
        <Button onClick={signIn}>Sign with Google</Button>
      </LoginInnerCotnainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const LoginInnerCotnainer = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: white;
    :hover {
      background-color: #0a8d48;
    }
  }
`;

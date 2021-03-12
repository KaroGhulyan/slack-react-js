import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <LoginContainer>
      <LoginInnerCotnainer></LoginInnerCotnainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerCotnainer = styled.div`
  padding: 100px;
  
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
`;

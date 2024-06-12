import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login_40() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <LoginLayout>
        <Logo /> 
        <Heading as="h4">Log in to your account</Heading>
        <LoginForm />
      </LoginLayout>
    </StyleSheetManager>
  );
}

export default Login_40;

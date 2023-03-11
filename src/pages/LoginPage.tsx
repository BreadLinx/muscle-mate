import { SettingsLayout } from "layouts/SettingsLayout";
import styled from "styled-components";
import {
  Input,
  InputLabel,
  FormControl,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FormEvent, useState, ChangeEvent } from "react";
import { useAuth } from "store";
import { Flex, Link } from "ui";
import { Navigate, useLocation } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
`;

const StyledTitle = styled.h2`
  font-size: 50px;
  font-weight: 500;
  line-height: 62px;
  align-self: flex-start;
`;

export const LoginPage = () => {
  const { state } = useLocation();
  const { login, loginRequestData, name } = useAuth(state => state);
  const { request, success } = loginRequestData;

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email: emailValue, password: passwordValue });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <SettingsLayout>
      <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
        <StyledTitle>Login</StyledTitle>

        <FormControl variant="standard" sx={{ width: "300px" }}>
          <InputLabel htmlFor="emailInput">Email</InputLabel>
          <Input
            onChange={handleEmailChange}
            value={emailValue}
            id="emailInput"
          />
        </FormControl>

        <FormControl variant="standard" sx={{ width: "300px" }}>
          <InputLabel htmlFor="passwordInput">Password</InputLabel>
          <Input
            onChange={handlePasswordChange}
            value={passwordValue}
            id="passwordInput"
          />
        </FormControl>

        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Keep me signed in on this device"
        />

        <Button variant="outlined" fullWidth type="submit">
          Login
        </Button>

        <Flex d="column" g={10} a="center" style={{ width: "max-content" }}>
          <p>
            New to MuscleMate? <Link to="/signup">Create an Account</Link>
          </p>
          <p>
            Forgot your password? <Link to="/">Reset Password</Link>
          </p>
        </Flex>
      </StyledForm>
    </SettingsLayout>
  );
};

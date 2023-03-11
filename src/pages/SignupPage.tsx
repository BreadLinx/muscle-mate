import { SettingsLayout } from "layouts/SettingsLayout";
import styled from "styled-components";
import { Input, InputLabel, FormControl, Button } from "@mui/material";
import { Link } from "ui";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "store";
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

export const SignupPage = () => {
  const { state } = useLocation();
  const { signup, signupRequestData, name } = useAuth(state => state);
  const { request, success } = signupRequestData;

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({ name: nameValue, email: emailValue, password: passwordValue });
  };

  return name ? (
    <Navigate to={state?.from?.pathname || "/"}></Navigate>
  ) : (
    <SettingsLayout>
      <StyledForm onSubmit={handleSubmit} autoComplete="off" noValidate>
        <StyledTitle>Sign Up</StyledTitle>

        <FormControl variant="standard" sx={{ width: "300px" }}>
          <InputLabel htmlFor="nameInput">Name</InputLabel>
          <Input onChange={handleNameChange} value={nameValue} id="nameInput" />
        </FormControl>

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

        <Button variant="outlined" fullWidth type="submit">
          Sign Up
        </Button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </StyledForm>
    </SettingsLayout>
  );
};

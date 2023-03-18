import styled from "styled-components";
import { Input } from "ui/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "ui";
import { useState, FormEvent } from "react";
import { AdditionalOption } from "../components/AdditionalOption";
import { useAuth } from "store";
import { useFormAndValidation } from "hooks/useFormAndValidation";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
`;

const ButtonWithMargins = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SignUpForm = () => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();
  const { signup } = useAuth(state => state);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleVisibilityChange = () => {
    setPasswordVisibility(prev => !prev);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("НУ блят?");
    signup({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <StyledSection>
      <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Input
          htmlId="name-input"
          label="Your name"
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name || ""}
        />
        <Input
          htmlId="email-input"
          label="Your email address"
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
        />
        <Input
          htmlId="password-input"
          label="Your password"
          placeholder="Password"
          EndIcon={
            passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />
          }
          EndIconHandler={handleVisibilityChange}
          type={passwordVisibility ? "text" : "password"}
          name="password"
          onChange={handleChange}
          value={values.password || ""}
        />
        <ButtonWithMargins type="submit">Sign up</ButtonWithMargins>
        <AdditionalOption
          text="Already have an account?"
          linkOption={{ text: "Sign in", path: "/signin" }}
        />
      </StyledForm>
    </StyledSection>
  );
};

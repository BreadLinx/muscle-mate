import styled from "styled-components";
import { Input } from "ui/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "ui";
import { useState, FormEvent } from "react";
import { AdditionalOption } from "pages/SignUpPage/components/AdditionalOption";
import { useAuth } from "store/authStore";
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

export const SignInForm = () => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();
  const { login } = useAuth(state => state);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleVisibilityChange = () => {
    setPasswordVisibility(prev => !prev);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email: values.email, password: values.password });
  };

  return (
    <StyledSection>
      <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit}>
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
          bottomButton={{
            text: "Forgot password?",
            handler: () => {},
          }}
          EndIcon={
            passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />
          }
          EndIconHandler={handleVisibilityChange}
          type={passwordVisibility ? "text" : "password"}
          name="password"
          onChange={handleChange}
          value={values.password || ""}
        />
        <ButtonWithMargins type="submit">Sign in</ButtonWithMargins>
        <AdditionalOption
          text="Don`t have an account?"
          linkOption={{ text: "Sign up", path: "/signup" }}
        />
      </StyledForm>
    </StyledSection>
  );
};

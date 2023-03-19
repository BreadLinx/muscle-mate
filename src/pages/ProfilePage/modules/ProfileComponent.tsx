import styled from "styled-components";
import { Input } from "ui/Input";
import { useAuth } from "store/authStore";
import { useFormAndValidation } from "hooks/useFormAndValidation";
import { Button } from "ui/Button";

const StyledSection = styled.section`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

const CustomSignOutButton = styled(Button)`
  background-color: #ff2e00;
  margin-top: 20px;
`;

export const ProfileComponent = () => {
  const { handleChange } = useFormAndValidation();
  const { name, email, signout } = useAuth();

  return (
    <StyledSection>
      <Input
        htmlId="nameInput"
        placeholder={name}
        name="nameInput"
        readonly
        value={name || ""}
        onChange={handleChange}
      />
      <Input
        htmlId="emailInput"
        placeholder={name}
        name="emailInput"
        readonly
        value={email || ""}
        onChange={handleChange}
      />
      <Button type="button">Reset password</Button>
      <Button style={{ marginTop: 20 }} type="button">
        Leave feedback
      </Button>
      <Button type="button">Report a bug</Button>
      <CustomSignOutButton
        type="button"
        onClick={() => {
          signout();
        }}
      >
        Sign out
      </CustomSignOutButton>
    </StyledSection>
  );
};

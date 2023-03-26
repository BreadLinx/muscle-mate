import styled from "styled-components";
import { FC, ReactNode } from "react";

const StyledFormControl = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  font-family: "Inter";
`;

interface FormElementProps {
  children?: ReactNode;
}

export const FormElement: FC<FormElementProps> = ({ children }) => {
  return <StyledFormControl>{children}</StyledFormControl>;
};

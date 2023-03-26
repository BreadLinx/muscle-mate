import styled from "styled-components";
import { FC, ReactNode } from "react";

const StyledWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

interface PopupButtonsWrapperProps {
  children: ReactNode;
}

export const PopupButtonsWrapper: FC<PopupButtonsWrapperProps> = ({
  children,
}) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

import { FC } from "react";
import burgerIcon from "images/headerBurgerIcon.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  width: min-content;
  position: relative;
  &:hover div {
    visibility: visible;
  }
`;

const StyledButtonHover = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  opacity: 0.2;
  border-radius: 50%;
  z-index: 1;
  visibility: hidden;
`;

interface IHeaderMenuButton {
  handleClick: () => void;
}

export const HeaderMenuButton: FC<IHeaderMenuButton> = ({ handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      <StyledButtonHover />
      <img src={burgerIcon} alt="nothing" />
    </StyledButton>
  );
};

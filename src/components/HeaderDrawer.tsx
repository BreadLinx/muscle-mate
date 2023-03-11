import styled from "styled-components";
import { HeaderMenuButton } from "components/HeaderMenuButton";
import { FC } from "react";
import { NavLink } from "react-router-dom";

// prettier-ignore
const StyledDrawer = styled.div`
  height: 100vh;
  padding-top: 28.5px;
  padding-left: 20px;
  width: 250px;

  transform: translateX(${({ isMenuDropped }: { isMenuDropped: boolean }) => isMenuDropped ? 0 : "-250px"});
  transition: transform 0.15s ease-out;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${props => props.theme.colors.secondaryColor};

  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;

interface IHeaderMenuButton {
  handleClick: () => void;
  isMenuDropped: boolean;
}

export const HeaderDrawer: FC<IHeaderMenuButton> = ({
  handleClick,
  isMenuDropped,
}) => {
  return (
    <StyledDrawer isMenuDropped={isMenuDropped}>
      <HeaderMenuButton handleClick={handleClick} />
      <StyledLink to="/">Главная</StyledLink>
      <StyledLink to="/exercices">Тренировки</StyledLink>
      <StyledLink to="/">Питание</StyledLink>
      <StyledLink to="/">Настройки</StyledLink>
      <StyledLink to="/settings">Личный кабинет</StyledLink>
    </StyledDrawer>
  );
};

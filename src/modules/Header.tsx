import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 21px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledMainLink = styled(Link)`
  font-family: "Unbounded";
  font-size: 35px;
  font-weight: 900;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
`;
const StyledSecondaryLink = styled(Link)`
  font-family: "Unbounded";
  font-size: 20px;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  color: #828282;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledMainLink to="/">Workouts</StyledMainLink>
      <StyledSecondaryLink to="/">Set up plan</StyledSecondaryLink>
    </StyledHeader>
  );
};

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FC } from "react";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 21px;
  justify-content: flex-start;
  padding-left: 10px;
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

interface HeaderProps {
  mainLink: {
    text: string;
    path: string;
  };
  secondaryLink?: {
    text: string;
    path: string;
  };
}

export const Header: FC<HeaderProps> = ({ mainLink, secondaryLink }) => {
  return (
    <StyledHeader>
      <StyledMainLink to={mainLink.path}>{mainLink.text}</StyledMainLink>
      {secondaryLink?.text && (
        <StyledSecondaryLink to={secondaryLink.path}>
          {secondaryLink.text}
        </StyledSecondaryLink>
      )}
    </StyledHeader>
  );
};

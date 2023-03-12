import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FC } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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

const StyledTitle = styled.h1`
  font-family: "Unbounded";
  font-size: ${({ font }: { font?: number }) => (font ? `${font}px` : "32px")};
  font-weight: 900;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledSecondaryLink = styled(Link)`
  font-family: "Unbounded";
  font-size: 19px;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  color: #828282;
`;

const StyledArrowButton = styled.button`
  width: 32px;
  height: 32px;

  & svg {
    height: inherit;
    width: inherit;
  }
`;

interface HeaderProps {
  title: string;
  titleFont?: number;
  additionalLink?: {
    text: string;
    path: string;
  };
  arrowPath?: string;
}

export const Header: FC<HeaderProps> = ({
  title,
  titleFont,
  additionalLink,
  arrowPath,
}) => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      {arrowPath && (
        <StyledArrowButton
          onClick={() => {
            navigate(arrowPath);
          }}
        >
          <ArrowBackIosNewIcon />
        </StyledArrowButton>
      )}
      <StyledTitle font={titleFont}>{title}</StyledTitle>

      {additionalLink && !arrowPath && (
        <StyledSecondaryLink to={additionalLink.path}>
          {additionalLink.text}
        </StyledSecondaryLink>
      )}
    </StyledHeader>
  );
};

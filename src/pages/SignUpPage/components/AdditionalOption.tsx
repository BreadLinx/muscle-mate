import styled from "styled-components";
import { Link } from "react-router-dom";
import { FC } from "react";

const StyledWrapper = styled.div`
  font-family: "Inter";
  display: flex;
  flex-flow: row nowrap;
  gap: 5px;
  align-self: center;
`;

const StyledText = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
`;
const StyledLink = styled(Link)`
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
  color: #007aff;
  text-decoration: none;
`;

interface AdditionalOptionProps {
  text: string;
  linkOption: {
    text: string;
    path: string;
  };
}

export const AdditionalOption: FC<AdditionalOptionProps> = ({
  text,
  linkOption,
}) => {
  return (
    <StyledWrapper>
      <StyledText>{text}</StyledText>
      <StyledLink to={linkOption.path}>{linkOption.text}</StyledLink>
    </StyledWrapper>
  );
};

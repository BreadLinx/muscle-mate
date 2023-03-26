import styled from "styled-components";
import { FC } from "react";

const StyledText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;
  align-self: flex-start;
`;

interface PopupDescriptionProps {
  text: string;
}

export const PopupDescription: FC<PopupDescriptionProps> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

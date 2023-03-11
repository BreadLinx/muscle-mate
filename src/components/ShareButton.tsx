import ShareIcon from "images/ShareIcon.svg";

import { FC } from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
  width: 23px;
  aspect-ratio: 1 / 1;
  object-fit: fill;
`;

const StyledButton = styled.button`
  background-color: #464646;
  border-radius: 20px;
  border: 1px solid #6b6b6b;
  padding: 5px 10px 5px 10px;

  font-size: 14px;
  font-weight: 700;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 7px;
`;

interface IShareButton {
  shares: number;
}

export const ShareButton: FC<IShareButton> = ({ shares }) => {
  return (
    <StyledButton>
      <StyledIcon src={ShareIcon} alt="Like icon" />
      {shares}
    </StyledButton>
  );
};

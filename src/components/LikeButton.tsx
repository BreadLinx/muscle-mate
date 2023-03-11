import likeIconNotFilled from "images/likeIconEmpty.svg";
import likeIconFilled from "images/likeIconFilled.svg";
import { FC, useState } from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
  width: 23px;
  aspect-ratio: 1 / 1;
  object-fit: fill;
`;

const StyledButton = styled.button`
  background-color: ${({ filled }: { filled: boolean }) =>
    filled ? "#343434" : "#464646"};

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

interface ILikeButton {
  likes: number;
}

export const LikeButton: FC<ILikeButton> = ({ likes }) => {
  const [filled, setFilled] = useState(false);

  const handleClick = () => {
    setFilled(!filled);
  };

  return (
    <StyledButton onClick={handleClick} filled={filled}>
      <StyledIcon
        src={filled ? likeIconFilled : likeIconNotFilled}
        alt="Like icon"
      />
      {likes}
    </StyledButton>
  );
};

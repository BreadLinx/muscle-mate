import styled from "styled-components";
import { FC } from "react";
import { Loader } from "ui/Loader";

const StyledButton = styled.button`
  width: 100%;
  background-color: #fff;
  height: 55px;
  border-radius: 10px;

  font-family: "Inter";
  color: #000;
  font-size: 15px;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;
`;

interface PopupButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
}

export const PopupButton: FC<PopupButtonProps> = ({
  text,
  loading = false,
  ...restProps
}) => {
  return (
    <StyledButton disabled={loading} {...restProps}>
      {loading ? <Loader /> : text}
    </StyledButton>
  );
};

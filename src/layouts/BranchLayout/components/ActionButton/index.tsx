import * as S from "./styles";
import { FC } from "react";
import { Loader } from "ui/Loader";

type TButtonStates = "default" | "loading" | "done";

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: TButtonStates;
  text?: string;
  handleClick?: () => void;
}

export const ActionButton: FC<ActionButtonProps> = ({
  status = "default",
  text = "Save changes",
  handleClick,
  ...buttonOptions
}) => {
  return (
    <S.ActionButton
      {...buttonOptions}
      disabled={status !== "default"}
      onClick={handleClick}
      done={status === "done"}
    >
      {status === "default" && text}
      {status === "loading" && <Loader />}
      {status === "done" && <S.DoneIcon />}
    </S.ActionButton>
  );
};

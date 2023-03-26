import { FC, ReactNode } from "react";
import { Header, HeaderProps } from "modules/Header";
import * as S from "./styles";
import { ActionButton, ActionButtonProps } from "./components/ActionButton";

type BranchLayoutProps = HeaderProps & {
  children?: ReactNode;
  submitButonOptions: ActionButtonProps | "hide";
};

export const BranchLayout: FC<BranchLayoutProps> = ({
  children,
  submitButonOptions,
  ...headerProps
}) => {
  return (
    <S.LayoutWrapper>
      <Header {...headerProps} />
      <S.Main>{children}</S.Main>
      {submitButonOptions !== "hide" && (
        <ActionButton {...submitButonOptions} />
      )}
    </S.LayoutWrapper>
  );
};

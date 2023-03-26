import { FC, ReactNode } from "react";
import { Header, HeaderProps } from "modules/Header";
import { MobileNavigation } from "modules/MobileNavigation";
import * as S from "./styles";

type MainLayoutProps = HeaderProps & {
  children?: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  ...headerProps
}) => {
  return (
    <>
      <Header {...headerProps} />
      <S.Main>{children}</S.Main>
      <MobileNavigation />
    </>
  );
};

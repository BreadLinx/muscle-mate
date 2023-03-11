import styled from "styled-components";
import { FC, ReactNode } from "react";
import { Header } from "modules/Header";
import { MobileNavigation } from "modules/MobileNavigation";

interface MainLayoutProps {
  children?: ReactNode;
}

const StyledMain = styled.main`
  height: calc(100vh - 149px);
  overflow-y: overlay;
`;

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <MobileNavigation />
    </>
  );
};

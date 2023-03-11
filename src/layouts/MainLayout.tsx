import styled from "styled-components";
import { FC, ReactNode } from "react";
import { Header } from "modules/Header";
import { MobileNavigation } from "modules/MobileNavigation";

interface MainLayoutProps {}

interface MainLayoutProps {
  mainLink: {
    text: string;
    path: string;
  };
  secondaryLink?: {
    text: string;
    path: string;
  };
  children?: ReactNode;
}

const StyledMain = styled.main`
  height: calc(100vh - 164.6px);
  overflow-y: overlay;
`;

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  mainLink,
  secondaryLink,
}) => {
  return (
    <>
      <Header mainLink={mainLink} secondaryLink={secondaryLink} />
      <StyledMain>{children}</StyledMain>
      <MobileNavigation />
    </>
  );
};

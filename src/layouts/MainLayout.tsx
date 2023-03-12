import styled from "styled-components";
import { FC, ReactNode } from "react";
import { Header } from "modules/Header";
import { MobileNavigation } from "modules/MobileNavigation";

interface MainLayoutProps {
  title: string;
  titleFont?: number;
  additionalLink?: {
    text: string;
    path: string;
  };
  arrowPath?: string;
  children?: ReactNode;
}

const StyledMain = styled.main`
  height: calc(100vh - 164.6px);
  overflow-y: overlay;
`;

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  title,
  titleFont,
  additionalLink,
  arrowPath,
}) => {
  return (
    <>
      <Header
        title={title}
        additionalLink={additionalLink}
        arrowPath={arrowPath}
        titleFont={titleFont}
      />
      <StyledMain>{children}</StyledMain>
      <MobileNavigation />
    </>
  );
};

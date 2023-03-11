import styled from "styled-components";
import { MobileNavigation } from "modules/MobileNavigation";
import { FC, ReactNode } from "react";

interface MobileLayoutProps {
  children?: ReactNode;
}

const StyledMain = styled.main`
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
  max-height: 100vh;
`;

export const MobileLayout: FC<MobileLayoutProps> = ({ children }) => {
  return (
    <>
      <StyledMain>{children}</StyledMain>
      <MobileNavigation />
    </>
  );
};

import { Header } from "modules";
import { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-areas: "leftSidebar content rightSidebar";
  grid-template-columns: 2fr 3fr 2.3fr;
  column-gap: 10px;
  padding: 85px 13px 5px 5px;
`;

const LeftSidebar = styled.section`
  grid-area: leftSidebar;
  background-color: ${props => props.theme.colors.thirdColor};
  border-radius: 30px;
  border: 1px solid #616161;
  padding: 15px;
`;

const RightSidebar = styled.section`
  grid-area: rightSidebar;
  background-color: ${props => props.theme.colors.thirdColor};
  width: 100%;
  height: 500px;
  border-radius: 30px;
  border: 1px solid #616161;
  padding: 15px;
`;

const ContentSection = styled.section`
  grid-area: content;
  width: 100%;
`;

interface IMainLayout {
  children?: ReactNode;
}

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "overlay";
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        <LeftSidebar />
        <ContentSection>{children}</ContentSection>
        <RightSidebar />
      </StyledMain>
    </>
  );
};

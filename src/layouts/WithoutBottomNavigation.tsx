import styled from "styled-components";
import { FC, ReactNode } from "react";
import { Header } from "modules/Header";

interface WithoutBottomNavigationProps {
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
  height: calc(100vh - 168px);
  overflow-y: overlay;
`;

const StyledActionButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 20px);
  height: 55px;
  border-radius: 20px;
  background-color: #383838;

  font-family: "Unbounded";
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const WithoutBottomNavigation: FC<WithoutBottomNavigationProps> = ({
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
      <StyledActionButton>Save changes</StyledActionButton>
    </>
  );
};

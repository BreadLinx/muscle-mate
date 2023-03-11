import { Header } from "modules/SecondHeader";
import { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 85px 13px 5px 5px;
  width: min-content;
  margin-left: auto;
  margin-right: auto;
`;

interface ISettingsLayout {
  children?: ReactNode;
}

export const SettingsLayout: FC<ISettingsLayout> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "overlay";
  }, []);

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

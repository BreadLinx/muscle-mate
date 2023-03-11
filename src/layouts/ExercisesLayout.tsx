import { Header } from "modules";
import { FC, ReactNode, useEffect } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 85px 33px 5px 25px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

interface IExercisesLayout {
  children?: ReactNode;
}

export const ExercisesLayout: FC<IExercisesLayout> = ({ children }) => {
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

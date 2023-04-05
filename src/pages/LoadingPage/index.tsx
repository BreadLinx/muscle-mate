import { Loader } from "ui/Loader";
import styled from "styled-components";

const StyledPage = styled.section`
  height: 100vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledLaoderWrapper = styled.div`
  height: 200px;
  width: 200px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const LoadingPage = () => {
  return (
    <StyledPage>
      <StyledLaoderWrapper>
        <Loader loaderColor="white" loaderThickness={8} />
      </StyledLaoderWrapper>
    </StyledPage>
  );
};

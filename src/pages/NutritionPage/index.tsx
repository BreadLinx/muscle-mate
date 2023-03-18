import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";

const StyledContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledWaitingText = styled.div`
  background-color: #383838;
  border-radius: 20px;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  font-family: "Inter";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #cacaca;
`;

export const NutritionPage = () => {
  return (
    <MainLayout title="Sports supplements" titleFont={29}>
      <StyledContentBox>
        <StyledWaitingText>Coming soon</StyledWaitingText>
      </StyledContentBox>
    </MainLayout>
  );
};

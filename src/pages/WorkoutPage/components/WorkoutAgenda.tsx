import styled from "styled-components";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledAgendaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-areas: "title setting";
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledAgendaTitle = styled.h1`
  grid-area: title;
  align-self: center;
  justify-self: center;
  font-size: 42px;
  font-weight: 700;
`;

const StyledAgendaSettingButton = styled.button`
  grid-area: setting;
`;

export const WorkoutAgenda = () => {
  return (
    <StyledAgendaWrapper>
      <StyledAgendaTitle>Chest workout</StyledAgendaTitle>
      <StyledAgendaSettingButton
        onClick={() => {
          console.log("наводка");
        }}
      >
        <SettingsIcon fontSize="large" />
      </StyledAgendaSettingButton>
    </StyledAgendaWrapper>
  );
};

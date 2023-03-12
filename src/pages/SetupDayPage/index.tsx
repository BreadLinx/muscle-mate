import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";
import { useParams } from "react-router-dom";
import { SetupDaySection } from "./modules/SetupDaySection";

export const SetupDayPage = () => {
  const { day } = useParams();
  const titleFont = day === "wednesday" ? 29 : 32;

  return (
    <WithoutBottomNavigation
      title={`Set up ${day}`}
      titleFont={titleFont}
      arrowPath="/setupplan"
    >
      <SetupDaySection></SetupDaySection>
    </WithoutBottomNavigation>
  );
};

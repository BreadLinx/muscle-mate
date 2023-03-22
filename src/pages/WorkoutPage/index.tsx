import styled from "styled-components";
import { useParams } from "react-router-dom";
import { WorkoutSection } from "./modules/WorkoutSection";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";

export const WorkoutPage = () => {
  const { day } = useParams();
  const titleDay = day!.charAt(0).toUpperCase() + day!.slice(1);

  return (
    <WithoutBottomNavigation
      title={titleDay}
      arrowPath={`/`}
      bottomButtonText="Finish workout"
    ></WithoutBottomNavigation>
  );
};

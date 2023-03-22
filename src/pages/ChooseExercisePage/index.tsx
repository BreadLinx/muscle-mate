import styled from "styled-components";
import { MainLayout } from "layouts/MainLayout";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useParams } from "react-router-dom";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";

export const ChooseExercisePage = () => {
  const { day } = useParams();

  return (
    <WithoutBottomNavigation
      title="Choose exercise"
      arrowPath={`/setupplan/${day}`}
      bottomButtonText="Choose"
    ></WithoutBottomNavigation>
  );
};

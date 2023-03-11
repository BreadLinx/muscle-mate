import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { useLocation, useNavigate } from "react-router-dom";

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #303030 !important;
  padding-bottom: 20px;
  box-sizing: border-box;
  height: unset !important;
  cursor: pointer;
`;

export const MobileNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <StyledBottomNavigation value={pathname}>
      <BottomNavigationAction
        label="Workouts"
        value="/"
        icon={<FitnessCenterIcon />}
        onClick={() => navigate("/")}
      />
      <BottomNavigationAction
        label="Exercises"
        value="/exercises"
        icon={<SportsGymnasticsIcon />}
        onClick={() => navigate("/exercises")}
      />
      <BottomNavigationAction
        label="Nutrition"
        value="/nutrition"
        icon={<DinnerDiningIcon />}
        onClick={() => navigate("/nutrition")}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<AccountCircleIcon />}
        onClick={() => navigate("/profile")}
      />
    </StyledBottomNavigation>
  );
};

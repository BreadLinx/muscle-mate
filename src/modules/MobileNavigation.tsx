import styled from "styled-components";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  useEffect(() => {
    setButtonsDisabled(false);
  }, [pathname]);

  return (
    <StyledBottomNavigation value={pathname}>
      <BottomNavigationAction
        label="Workouts"
        value="/workouts"
        icon={<FitnessCenterIcon />}
        onClick={() => {
          setButtonsDisabled(true);
          navigate("/workouts");
        }}
        disabled={buttonsDisabled}
      />
      <BottomNavigationAction
        label="Exercises"
        value="/exercises"
        icon={<SportsGymnasticsIcon />}
        onClick={() => {
          setButtonsDisabled(true);
          navigate("/exercises");
        }}
        disabled={buttonsDisabled}
      />
      <BottomNavigationAction
        label="Nutrition"
        value="/nutrition"
        icon={<DinnerDiningIcon />}
        onClick={() => {
          navigate("/nutrition");
        }}
        disabled={buttonsDisabled}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<AccountCircleIcon />}
        onClick={() => {
          navigate("/profile");
        }}
        disabled={buttonsDisabled}
      />
    </StyledBottomNavigation>
  );
};

import styled from "styled-components";
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #303030 !important;
`;

export const MobileNavigation = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledBottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Workouts"
        value="workouts"
        icon={<FitnessCenterIcon />}
      />
      <BottomNavigationAction
        label="Exercises"
        value="exercises"
        icon={<SportsGymnasticsIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteBorderIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
      />
    </StyledBottomNavigation>
  );
};

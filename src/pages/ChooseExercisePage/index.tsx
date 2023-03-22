import styled from "styled-components";
import { useState, ChangeEvent } from "react";
import { MainLayout } from "layouts/MainLayout";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useParams } from "react-router-dom";
import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";
import { FilterFormSection } from "./modules/FilterFormSection";
import { ContentSection } from "./modules/ContentSection";
import { useAuth, useExercises } from "store";
import { IExercise } from "types";
import { Tdays } from "types";

export const ChooseExercisePage = () => {
  const navigate = useNavigate();
  const { day } = useParams<{ day: any }>();
  const [searchValue, setSearchValue] = useState("");
  const [musclesselectValue, setMusclesSelectValue] = useState("");
  const [typeSelectValue, setTypeSelectValue] = useState("");
  const [checkedCard, setCheckedCard] = useState("");

  const { addClientExercise, userExercises } = useAuth(state => state);
  const { exercises: commomExercises } = useExercises(state => state);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchValue(lowerCase);
  };

  return (
    <WithoutBottomNavigation
      title="Choose exercise"
      arrowPath={`/setupplan/${day}`}
      bottomButtonText="Choose"
      bottomButtonHandler={() => {
        let card = userExercises.find(item => item._id === checkedCard);
        if (!card) {
          card = commomExercises.find(item => item._id === checkedCard);
        }

        addClientExercise(day, card as IExercise);

        navigate(-1);
      }}
    >
      <FilterFormSection
        searchValue={searchValue}
        handleSearch={handleSearchChange}
        musclesselectValue={musclesselectValue}
        setMusclesSelectValue={setMusclesSelectValue}
        typeSelectValue={typeSelectValue}
        setTypeSelectValue={setTypeSelectValue}
      />
      <ContentSection
        searchValue={searchValue}
        musclesselectValue={musclesselectValue}
        typeSelectValue={typeSelectValue}
        checked={checkedCard}
        setChecked={setCheckedCard}
      />
    </WithoutBottomNavigation>
  );
};

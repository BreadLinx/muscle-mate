// import { WithoutBottomNavigation } from "layouts/WithoutBottomNavigation";
import { BranchLayout } from "layouts/BranchLayout";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { SetupDaySection } from "./modules/SetupDaySection";
import { useAuth } from "store";
import { Tdays } from "types";
import { useEffect, useState } from "react";
import { Popup } from "modules/Popup";
import { PopupDescription } from "modules/Popup/components/PopupDescription";
import { PopupButtonsWrapper } from "modules/Popup/components/PopupButtonsWrapper";
import { PopupButton } from "modules/Popup/components/PopupButton";
import { AnimatePresence } from "framer-motion";

export const SetupDayPage = () => {
  const { day } = useParams() as { day: Tdays };
  const navigate = useNavigate();
  const location = useLocation();

  const titleFont = day === "wednesday" ? 29 : 32;
  const {
    workouts,
    applyWorkoutChanges,
    changeWorkoutDayGroupClient,
    applyWorkoutChangesRequestData,
    getMe,
  } = useAuth(state => state);
  const properDay = workouts && workouts[day];

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupAnswer, setPopupAnswer] = useState(false);

  const [musclesSelectValue, setMusclesSelectValue] = useState(
    properDay!.name ? properDay!.name : "",
  );

  useEffect(() => {
    changeWorkoutDayGroupClient(day, musclesSelectValue);
  }, [musclesSelectValue]);

  useEffect(() => {
    if (applyWorkoutChangesRequestData.success) {
      setBottomButtonStatus("done");
      setTimeout(() => {
        setBottomButtonStatus("default");
      }, 1500);
    }
  }, [applyWorkoutChangesRequestData]);

  const handlePopupClose = () => {
    setPopupVisible(false);
    setPopupAnswer(true);
  };

  const [bottomButtonStatus, setBottomButtonStatus] = useState<
    "default" | "loading" | "done"
  >("default");

  return (
    <BranchLayout
      title={`Set up ${day}`}
      titleFont={titleFont}
      arrowPath="/setupplan"
      arrowFn={async () => {
        getMe();
      }}
      submitButonOptions={{
        handleClick: async () => {
          setBottomButtonStatus("loading");
          applyWorkoutChanges(day);
        },
        status: bottomButtonStatus,
      }}
    >
      <SetupDaySection
        dayExercises={properDay!.exercises}
        selectValue={musclesSelectValue}
        setSelectValue={setMusclesSelectValue}
      />

      {/* <AnimatePresence mode="sync">
        {isPopupVisible && (
          <Popup title="You sure you want to leave?" closeFn={handlePopupClose}>
            <PopupDescription text="Any unsaved changes will be discarded, save the changes before leaving the page." />
            <PopupButtonsWrapper>
              <PopupButton text="Leave without saving" />
              <PopupButton text="Save and leave" />
            </PopupButtonsWrapper>
          </Popup>
        )}
      </AnimatePresence> */}
    </BranchLayout>
  );
};

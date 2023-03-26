import { useParams, useNavigate } from "react-router-dom";
import { BranchLayout } from "layouts/BranchLayout";
import { WorkoutSection } from "./modules/WorkoutSection";
import { useAuth } from "store";
import { Tdays } from "types";

export const WorkoutPage = () => {
  const workouts = useAuth(state => state.workouts);
  const navigate = useNavigate();
  const { day } = useParams() as { day: Tdays };
  const titleDay = day!.charAt(0).toUpperCase() + day!.slice(1);
  const properDay = workouts && workouts[day];

  return (
    <BranchLayout
      title={properDay.name ? `${titleDay}, ${properDay.name} day` : titleDay}
      titleFont={25}
      arrowPath={`/workouts`}
      submitButonOptions={{
        text: "Finish workout",
        handleClick: () => {
          navigate(-1);
        },
      }}
    >
      <WorkoutSection />
    </BranchLayout>
  );
};

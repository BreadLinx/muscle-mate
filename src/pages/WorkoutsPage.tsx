import { FC } from "react";
import { WorkoutsWeek } from "modules/WorkoutsWeek";
import { MobileLayout } from "layouts/MobileLayout";

export const WorkoutsPage: FC = () => {
  return (
    <MobileLayout>
      <WorkoutsWeek />
    </MobileLayout>
  );
};

import { MainLayout } from "layouts/MainLayout";

import { ProfileComponent } from "./modules/ProfileComponent";

export const ProfilePage = () => {
  return (
    <MainLayout title="Profile">
      <ProfileComponent />
    </MainLayout>
  );
};

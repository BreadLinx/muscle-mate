import { MainLayout } from "layouts/MainLayout";

export const ProfilePage = () => {
  return (
    <MainLayout
      mainLink={{
        text: "Profile",
        path: "/profile",
      }}
    ></MainLayout>
  );
};

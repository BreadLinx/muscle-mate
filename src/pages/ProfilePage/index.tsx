import { MainLayout } from "layouts/MainLayout";
import { useAuth } from "store";

export const ProfilePage = () => {
  const { name } = useAuth();

  return (
    <MainLayout title="Profile">
      <p>{name}</p>
    </MainLayout>
  );
};

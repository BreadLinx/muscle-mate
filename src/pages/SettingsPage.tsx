import { SettingsLayout } from "layouts/SettingsLayout";
import styled from "styled-components";
import { Flex } from "ui";
import {
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
  Avatar,
  Badge,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useRef, ChangeEvent } from "react";
import { useAuth } from "store";
import addPhotoIcon from "images/addPhotoIcon.svg";
import { useNavigate } from "react-router-dom";

const StyledSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  gap: 50px;
  margin-top: 20px;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
`;

const StyledAvatarWrapper = styled.button`
  width: 125px;
  aspect-ratio: 1 / 1;
  border: 3px solid #fff;
  border-radius: 50%;
  opacity: 1;
  transition: opacity 0.2s ease;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const SettingsPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { avatarUrl, patchProfileAvatar, name, email, signout } = useAuth(
    state => state,
  );

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append("avatar", e.target.files[0]);

      patchProfileAvatar(formData);
    }
  };

  const handleSignOut = () => {
    navigate("/", { replace: true });
    signout();
  };

  return (
    <SettingsLayout>
      <StyledSection>
        <StyledAvatarWrapper
          onClick={() => {
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<Avatar src={addPhotoIcon} />}
          >
            <Avatar
              src={avatarUrl}
              sx={{ width: "120px", height: "120px", cursor: "pointer" }}
            />
          </Badge>

          <input
            ref={fileInputRef}
            onChange={handleChangeFile}
            hidden
            type="file"
            accept="image/*"
          />
        </StyledAvatarWrapper>

        <StyledForm noValidate autoComplete="off">
          <FormControl variant="standard" sx={{ width: "300px" }}>
            <InputLabel htmlFor="nameInput">Name</InputLabel>
            <Input
              id="nameInput"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={e => {
                      (
                        document.querySelector("#nameInput") as HTMLInputElement
                      ).focus();
                    }}
                  >
                    <Edit />
                  </IconButton>
                </InputAdornment>
              }
              value={name}
            />
          </FormControl>
          <FormControl variant="standard" size="medium" sx={{ width: "400px" }}>
            <InputLabel htmlFor="emailInput">Email</InputLabel>
            <Input
              id="emailInput"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={e => {
                      (
                        document.querySelector(
                          "#emailInput",
                        ) as HTMLInputElement
                      ).focus();
                    }}
                  >
                    <Edit />
                  </IconButton>
                </InputAdornment>
              }
              value={email}
            />
          </FormControl>

          <Flex g={10}>
            <Button
              onClick={() => console.log("Сохраняем")}
              disabled={false}
              variant="contained"
              type="submit"
            >
              Сохранить
            </Button>
            <Button
              onClick={() => console.log("Возвращаем")}
              disabled={false}
              variant="outlined"
              type="reset"
            >
              Отменить изменения
            </Button>
          </Flex>
          <Button variant="outlined" color="error" onClick={handleSignOut}>
            Выйти из личного кабинета
          </Button>
        </StyledForm>
      </StyledSection>
    </SettingsLayout>
  );
};

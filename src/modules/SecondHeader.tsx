import styled from "styled-components";
import { Flex } from "ui/Flex";
import { useAuth } from "store";
import {
  Avatar,
  MenuList,
  Menu,
  MenuItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StyledHeader = styled.header`
  background-color: #272727;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  font-family: "Unbounded";
  font-weight: 800;
  text-decoration: none;
`;

const StyledSettingsBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.fourthColor};
  min-width: 300px;
  height: 200px;
  padding: 10px;
  position: absolute;

  bottom: -210px;

  right: 0;
  border-radius: 20px;
`;

const StyledName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const StyledEmail = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

export const Header = () => {
  const navigate = useNavigate();
  const StyledSettingsBoxRef = useRef<HTMLDivElement>(null);
  const { name, avatarUrl, email, signout } = useAuth(state => state);

  const [isMenuOpened, setMenuOpened] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpened(true);
    setTimeout(() => {
      document.addEventListener("click", handleMenuClose);
      document.addEventListener("keydown", handleMenuCloseByESC);
    }, 3);
  }, []);

  const closeMenu = useCallback(() => {
    document.removeEventListener("click", handleMenuClose);
    document.removeEventListener("keydown", handleMenuCloseByESC);
    setMenuOpened(false);
  }, []);

  const handleMenuClose = useCallback(
    (e: MouseEvent) => {
      if (!StyledSettingsBoxRef.current) {
        return;
      }
      if (!StyledSettingsBoxRef.current.contains(e.target as HTMLElement)) {
        closeMenu();
      }
    },
    [isMenuOpened, closeMenu],
  );

  const handleMenuCloseByESC = useCallback(
    (e: Event & { key: string }) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    },
    [closeMenu],
  );

  return (
    <StyledHeader>
      <Flex d="row" g={50} a="center">
        <StyledNavLink to="/">Feed</StyledNavLink>
        <StyledNavLink to="/exercices">Exercices</StyledNavLink>
        <StyledNavLink to="/favorites">My Favorites</StyledNavLink>
        <StyledNavLink to="/workouts">Workouts</StyledNavLink>
        <StyledNavLink to="/addexercise">Add exercise</StyledNavLink>
      </Flex>
      <div style={{ position: "relative", cursor: "auto" }}>
        <Avatar
          sx={{ height: 50, width: 50, cursor: "pointer" }}
          src={avatarUrl}
          alt={name}
          onClick={() => {
            if (!isMenuOpened) {
              openMenu();
            } else {
              closeMenu();
            }
          }}
        />
        <AnimatePresence>
          {isMenuOpened && (
            <StyledSettingsBox
              ref={StyledSettingsBoxRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <Flex d="row" g={10} a="center">
                <Avatar
                  sx={{ height: 60, width: 60 }}
                  src={avatarUrl}
                  alt={name}
                />
                <Flex d="column" g={5} a="flex-start">
                  <StyledName>{name || "Guest"}</StyledName>

                  <StyledEmail>
                    {email || "You can login or create new account now."}
                  </StyledEmail>
                </Flex>
              </Flex>
              <MenuList
                sx={{
                  mt: "15px",
                  "& span": {
                    fontFamily: "Inter, Arial, Helvetica, sans-serif",
                    fontWeight: 700,
                    textAlign: "left",
                  },
                }}
              >
                {name
                  ? [
                      <MenuItem
                        key={"menuProfileButton"}
                        onClick={() => {
                          closeMenu();
                          navigate("/profile");
                        }}
                        sx={{ borderRadius: "10px" }}
                      >
                        <ListItemIcon>
                          <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Manage profile</ListItemText>
                      </MenuItem>,
                      <Divider key={"menuProfileButtonsDevider"} />,
                      <MenuItem
                        key={"menuSignoutButton"}
                        onClick={() => {
                          closeMenu();
                          navigate("/", { replace: true });
                          signout();
                        }}
                        sx={{ borderRadius: "10px" }}
                      >
                        <ListItemIcon>
                          <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Sign out</ListItemText>
                      </MenuItem>,
                    ]
                  : [
                      <MenuItem
                        key={"menuLoginButton"}
                        onClick={() => {
                          closeMenu();
                          navigate("/login");
                        }}
                        sx={{ borderRadius: "10px" }}
                      >
                        <ListItemIcon>
                          <LoginIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Login</ListItemText>
                      </MenuItem>,
                      <Divider key={"menuLoginButtonsDevider"} />,
                      <MenuItem
                        key={"menuSignupButton"}
                        onClick={() => {
                          closeMenu();
                          navigate("/signup");
                        }}
                        sx={{ borderRadius: "10px" }}
                      >
                        <ListItemIcon>
                          <PersonAddIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Create an account</ListItemText>
                      </MenuItem>,
                    ]}
              </MenuList>
            </StyledSettingsBox>
          )}
        </AnimatePresence>
      </div>
    </StyledHeader>
  );
};

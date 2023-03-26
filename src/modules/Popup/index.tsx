import styled from "styled-components";
import { FC, ReactNode } from "react";
import { Blackout } from "./components/Blackout";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const StyledSection = styled(motion.section)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  background-color: #262626;
  width: calc(100% - 20px);
  z-index: 5;
  border-radius: 20px;
  padding: 20px 10px 20px 10px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;
`;

const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
`;

const StyledTitleBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 10px);
`;

const StyledCrossButton = styled.button`
  margin-right: 10px;
`;

interface PopupProps {
  title: string;
  children?: ReactNode;
  closeFn: () => void;
}

export const Popup: FC<PopupProps> = ({ title, children, closeFn }) => {
  return (
    <>
      <StyledSection
        initial={{
          opacity: 0.6,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.6 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <StyledTitleBox>
          <StyledTitle>{title}</StyledTitle>
          <StyledCrossButton onClick={closeFn}>
            <CloseIcon />
          </StyledCrossButton>
        </StyledTitleBox>
        {children}
      </StyledSection>
      <Blackout />
    </>
  );
};

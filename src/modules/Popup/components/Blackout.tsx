import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBlackout = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);

  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  overflow: hidden;
`;

export const Blackout = () => {
  return (
    <StyledBlackout
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
};

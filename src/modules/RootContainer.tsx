import { FC, useState, useEffect } from "react";
import { useOutlet, useLocation, useMatch, matchPath } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const StyledAnimationBox = styled(motion.div)`
  height: 100%;
  background-color: #1e1e1e;
`;

const StyledMainElement = styled(StyledAnimationBox)`
  z-index: -1;
`;
const StyledSecondElement = styled(StyledAnimationBox)`
  z-index: 10;
`;

const AnimatedOutlet: FC = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

interface RootContainerProps {
  mainPath: string;
  secondPath: string;
}

export const RootContainer: FC<RootContainerProps> = ({
  mainPath,
  secondPath,
}) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {location.pathname === mainPath ? (
        <StyledMainElement
          key={location.pathname}
          initial={
            location?.state?.from.includes(mainPath) ? { x: "-25%" } : { x: 0 }
          }
          animate={{ x: 0 }}
          exit={{ x: "-25%" }}
          transition={{ duration: 0.4, ease: [0, 1.11, 1, 1] }}
        >
          <AnimatedOutlet />
        </StyledMainElement>
      ) : (
        <StyledSecondElement
          key={location.pathname}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.4,
            ease: [0.4, 1.08, 0.56, 0.98],
          }}
        >
          <AnimatedOutlet />
        </StyledSecondElement>
      )}
    </AnimatePresence>
  );
};

import styled from "styled-components";

export const Blackout = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  opacity: ${({ isMenuDropped }: { isMenuDropped: boolean }) =>
    isMenuDropped ? 0.4 : 0};
  transition: opacity 0.15s ease-out;

  overflow: hidden;
`;

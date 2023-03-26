import styled, { keyframes } from "styled-components";

const rotation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const StyledLoader = styled.span`
  height: 40%;
  aspect-ratio: 1 / 1;
  border: 4px solid #000000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

export const Loader = () => {
  return <StyledLoader />;
};

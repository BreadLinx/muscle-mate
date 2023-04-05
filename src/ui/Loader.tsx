import styled, { keyframes } from "styled-components";
import { FC } from "react";

const rotation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

interface StyledLoaderProps {
  loaderColor: "black" | "white";
  loaderThickness: number;
}

const StyledLoader = styled.span<StyledLoaderProps>`
  height: 40%;
  aspect-ratio: 1 / 1;
  border: ${({ loaderThickness }) => loaderThickness}px solid
    ${({ loaderColor }) => (loaderColor === "black" ? "#000" : "#fff")};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

interface LoaderProps {
  loaderColor?: "black" | "white";
  loaderThickness?: number;
}

export const Loader: FC<LoaderProps> = ({
  loaderColor = "black",
  loaderThickness = 4,
}) => {
  return (
    <StyledLoader loaderColor={loaderColor} loaderThickness={loaderThickness} />
  );
};

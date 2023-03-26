import styled from "styled-components";
import Done from "@mui/icons-material/Done";

export const DoneIcon = styled(Done)`
  width: initial !important;
  height: 60% !important;
  aspect-ratio: 1 / 1 !important;
  & path {
    height: 40%;
    aspect-ratio: 1 / 1;
    color: #fff;
  }
`;

interface StyledActionButtonProps {
  done: boolean;
}

export const ActionButton = styled.button<StyledActionButtonProps>`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 20px);
  height: 55px;
  border-radius: 20px;

  background-color: ${({ done }: StyledActionButtonProps) =>
    done ? "rgba(97, 255, 0, 0.8)" : "rgba(0, 122, 255, 0.8)"};
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  font-family: "Unbounded";
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

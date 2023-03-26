import styled from "styled-components";
import AddPhotoAlternate from "@mui/icons-material/AddPhotoAlternate";

export const MainWrapper = styled.div`
  background-color: #003064;
  height: 198px;
  border: 2px #007aff dashed;
  border-radius: 20px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
  align-items: center;
  position: relative;
  z-index: 1;
  opacity: 1;
`;

export const Button = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  height: 54px;
  background-color: #007aff;
  border-radius: 10px;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
`;

export const AddPhotoAlternateIcon = styled(AddPhotoAlternate)`
  width: 54px !important;
  height: 54px !important;
`;

export const PreviewImage = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`;

export const PreviewImageWrapper = styled.div`
  width: 100%;
  height: 198px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const PreviewTextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
`;

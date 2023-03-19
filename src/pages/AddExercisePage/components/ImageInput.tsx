import styled from "styled-components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ChangeEvent, useRef, useState, FC } from "react";

const StyledWrapper = styled.div`
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
  align-items: center;
  position: relative;
  z-index: 1;
  opacity: 1;
`;

const StyledButton = styled.button`
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

const StyledAddPhotoAlternateIcon = styled(AddPhotoAlternateIcon)`
  width: 54px !important;
  height: 54px !important;
`;

const StyledPreviewImage = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`;

const StyledPreviewImageWrapper = styled.div`
  width: 100%;
  height: 198px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const StyledPreviewTextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
`;

interface ImageInputProps {
  setFileValue: React.Dispatch<React.SetStateAction<File | undefined>>;
  previewFileValue: string;
  setPreviewFileValue: React.Dispatch<React.SetStateAction<string>>;
}

export const ImageInput: FC<ImageInputProps> = ({
  setFileValue,
  previewFileValue,
  setPreviewFileValue,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const secondFileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if (reader.result) {
            setPreviewFileValue(reader.result as string);
          }

          setFileValue(file as File);
        };
      }
    }
  };

  if (previewFileValue) {
    return (
      <StyledPreviewImageWrapper>
        <StyledPreviewImage src={previewFileValue} />
        <StyledPreviewTextWrapper>
          <p>Image preview</p>
          <StyledButton
            onClick={() => {
              secondFileInputRef.current?.click();
            }}
            type="button"
          >
            Change image
          </StyledButton>
        </StyledPreviewTextWrapper>
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          hidden
          ref={secondFileInputRef}
        />
      </StyledPreviewImageWrapper>
    );
  }

  return (
    <StyledWrapper
      onClick={() => {
        fileInputRef.current?.click();
      }}
    >
      <ButtonWrapper>
        <StyledAddPhotoAlternateIcon />
        <StyledButton type="button">
          {previewFileValue ? "Pick another image" : "Add Image"}
        </StyledButton>
      </ButtonWrapper>
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        hidden
        ref={fileInputRef}
      />
    </StyledWrapper>
  );
};

import { ChangeEvent, useRef, FC, useState, useEffect } from "react";
import { useAuth } from "store";
import * as S from "./styles";

interface ImageInputProps {
  setFileValue: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export const ImageInput: FC<ImageInputProps> = ({ setFileValue }) => {
  const [previewFileValue, setPreviewFileValue] = useState("");
  const createUserExerciseRequestData = useAuth(
    state => state.createUserExerciseRequestData,
  );

  useEffect(() => {
    if (createUserExerciseRequestData.success) {
      setPreviewFileValue("");
    }
  }, [createUserExerciseRequestData]);

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
      <S.PreviewImageWrapper>
        <S.PreviewImage src={previewFileValue} />
        <S.PreviewTextWrapper>
          <p>Image preview</p>
          <S.Button
            onClick={() => {
              secondFileInputRef.current?.click();
            }}
            type="button"
          >
            Change image
          </S.Button>
        </S.PreviewTextWrapper>
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          hidden
          ref={secondFileInputRef}
        />
      </S.PreviewImageWrapper>
    );
  }

  return (
    <S.MainWrapper
      onClick={() => {
        fileInputRef.current?.click();
      }}
    >
      <S.ButtonWrapper>
        <S.AddPhotoAlternateIcon />
        <S.Button type="button">
          {previewFileValue ? "Pick another image" : "Add Image"}
        </S.Button>
      </S.ButtonWrapper>
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        hidden
        ref={fileInputRef}
      />
    </S.MainWrapper>
  );
};

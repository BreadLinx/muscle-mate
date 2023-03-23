import styled from "styled-components";
import { FC, ReactNode, ChangeEvent } from "react";

const StyledFormControl = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  font-family: "Inter";
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: #414141;
  border: 0;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;

  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledInputLabel = styled.label`
  font-size: 19px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledBottomButton = styled.button`
  align-self: flex-end;
  color: #007aff;

  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledEndIcon = styled.button``;

const StyledInputWrapper = styled.div`
  width: 100%;
  background-color: #414141;
  border: 0;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  gap: 5px;

  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
`;

const StyledTextAreaWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  background-color: initial;
  border: 0;
  outline: none;
  resize: none;

  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  &::-webkit-scrollbar {
    width: 1px;
  }
`;

interface CommonInputProps {
  htmlId: string;
  label?: string;
  placeholder: string;
  bottomButton?: {
    text: string;
    handler: () => void;
  };

  name: string;
  value: string;
  readonly?: boolean;

  minNumber?: number;
  maxNumber?: number;
}

type multilineInputProps = CommonInputProps & {
  multiline?: boolean;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  StartIcon?: never;
  EndIcon?: never;
  StartIconHandler?: never;
  EndIconHandler?: never;
  type?: never;
};
type oneLineInputProps = CommonInputProps & {
  StartIcon?: ReactNode;
  EndIcon?: ReactNode;
  StartIconHandler?: () => void;
  EndIconHandler?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;

  multiline?: never;
  rows?: never;
};

type InputProps = multilineInputProps | oneLineInputProps;

export const Input: FC<InputProps> = ({
  htmlId,
  label,
  bottomButton,

  StartIcon,
  EndIcon,
  StartIconHandler,
  EndIconHandler,

  placeholder,
  type = "text",
  name,
  value,
  onChange,

  multiline = false,
  readonly = false,

  minNumber,
  maxNumber,
}) => {
  return (
    <StyledFormControl>
      {label && <StyledInputLabel htmlFor={htmlId}>{label}</StyledInputLabel>}
      {!multiline ? (
        <StyledInputWrapper>
          {StartIcon && (
            <StyledEndIcon type="button" onClick={StartIconHandler}>
              {StartIcon}
            </StyledEndIcon>
          )}

          <StyledInput
            id={htmlId}
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
            readOnly={readonly}
            min={minNumber}
            max={maxNumber}
            pattern={type === "number" ? "d*" : undefined}
          />

          {EndIcon && (
            <StyledEndIcon type="button" onClick={EndIconHandler}>
              {EndIcon}
            </StyledEndIcon>
          )}
        </StyledInputWrapper>
      ) : (
        <StyledInputWrapper>
          <StyledTextAreaWrapper>
            <StyledTextArea
              value={value}
              onChange={
                onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void
              }
              rows={7}
              maxLength={357}
              name={name}
              placeholder={placeholder}
              readOnly={readonly}
            ></StyledTextArea>
          </StyledTextAreaWrapper>
        </StyledInputWrapper>
      )}
      {bottomButton && (
        <StyledBottomButton type="button" onClick={bottomButton.handler}>
          {bottomButton.text}
        </StyledBottomButton>
      )}
    </StyledFormControl>
  );
};

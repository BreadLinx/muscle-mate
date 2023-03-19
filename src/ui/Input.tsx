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

interface InputProps {
  htmlId: string;
  label?: string;
  placeholder: string;
  bottomButton?: {
    text: string;
    handler: () => void;
  };
  StartIcon?: ReactNode;
  EndIcon?: ReactNode;
  StartIconHandler?: () => void;
  EndIconHandler?: () => void;
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

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
}) => {
  return (
    <StyledFormControl>
      {label && <StyledInputLabel htmlFor={htmlId}>{label}</StyledInputLabel>}
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
          onChange={onChange}
        />

        {EndIcon && (
          <StyledEndIcon type="button" onClick={EndIconHandler}>
            {EndIcon}
          </StyledEndIcon>
        )}
      </StyledInputWrapper>
      {bottomButton && (
        <StyledBottomButton type="button" onClick={bottomButton.handler}>
          {bottomButton.text}
        </StyledBottomButton>
      )}
    </StyledFormControl>
  );
};

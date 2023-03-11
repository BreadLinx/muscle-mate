import styled from "styled-components";
import { Loader, Flex } from "ui";
import { FC } from "react";

export const StyledProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StyledWrapper = styled(Flex)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3f3f3f;
`;

interface IProfileIcon {
  src?: string;
  alt?: string;
}

export const ProfileIcon: FC<IProfileIcon> = ({ src, alt }) => {
  return (
    <StyledWrapper a="center" j="center">
      {src ? <StyledProfileIcon src={src} alt={alt} /> : <Loader />}
    </StyledWrapper>
  );
};

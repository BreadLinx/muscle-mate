import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 21px;
  justify-content: flex-start;

  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  max-width: 100%;
  max-height: 83px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Title = styled.h1`
  font-size: ${({ font }: { font?: number }) => (font ? `${font}px` : "32px")};
  font-weight: 900;
  line-height: 43px;
  letter-spacing: 0;
`;

export const SecondaryLink = styled(Link)`
  font-family: "Unbounded";
  font-size: 19px;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 0;
  text-decoration: none;
  color: #828282;
`;

export const ArrowButton = styled.button`
  width: 32px;
  height: 32px;

  & svg {
    height: inherit;
    width: inherit;
  }
`;

export const IconButton = styled.button`
  width: 32px;
  height: 32px;

  & svg {
    width: inherit !important;
    height: inherit !important;
  }
`;

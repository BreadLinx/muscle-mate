import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(RouterLink)`
  /* text-decoration: none; */
  opacity: 1;
  transition: opacity 0.2s ease;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

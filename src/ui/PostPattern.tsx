import styled from "styled-components";

export const PostPattern = styled.article`
  background-color: ${props => props.theme.colors.thirdColor};
  border-radius: 30px;
  border: 1px solid #616161;
  padding: 15px;

  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  width: 100%;
`;

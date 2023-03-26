import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.textColor};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Unbounded", "Inter", Arial, Helvetica, sans-serif;
  }

  p, a, span {
    font-family: "Inter", Arial, Helvetica, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: initial;
  } 

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #6b6b6b;
    border-radius: 10px
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #414141;
  }

  body {
    background-color: ${({ theme }) => theme.colors.mainColor};
    overflow: overlay;
  }

  button {
    border: 0;
    background-color: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .active {
    text-decoration: underline;
  }
`;

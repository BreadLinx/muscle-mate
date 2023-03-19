import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const muiTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const theme = {
  colors: {
    textColor: "#fff",

    mainColor: "#1e1e1e",
    secondaryColor: "#272727",
    thirdColor: "#313131",
    fourthColor: "#3e3e3e",
  },
};

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${theme.colors.textColor};

  
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Unbounded", Arial, Helvetica, sans-serif;
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
  background-color: ${theme.colors.mainColor};
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <Global />
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  </>,
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
// register();

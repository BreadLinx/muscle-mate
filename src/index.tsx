import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkTheme } from "styles/Themes";
import { Global } from "styles/Global";

const client = new QueryClient();

const muiTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <ThemeProvider theme={DarkTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <Global />
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  </>,
);

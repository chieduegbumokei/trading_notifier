import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { Theme } from "styles/theme.ts";
import { Providers } from "store/provider.tsx";
import GlobalStyle from "styles/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Providers>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");

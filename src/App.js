import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;

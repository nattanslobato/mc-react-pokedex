import React from "react";
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
    </div>
  );
}

export default App;

import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "theme";
import Navigation from "routes";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;

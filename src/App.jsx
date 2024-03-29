import { ThemeProvider } from "@emotion/react";
import Header from "./components/layout/Header"
import Home from "./pages/Home"
import Toolbar from '@mui/material/Toolbar';
import theme from "./config/theme";
import Divider from '@mui/material/Divider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar />
      <Home />
      <Divider />
    </ThemeProvider>
  )
}

export default App

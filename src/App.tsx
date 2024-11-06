import { ThemeProvider } from "./components/context/ThemeContext";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import "./App.module.scss";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;

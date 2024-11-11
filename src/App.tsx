import { ThemeProvider } from "./components/context/ThemeContext";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import "./components/style/global.scss";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;

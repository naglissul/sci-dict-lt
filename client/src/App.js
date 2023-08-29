import MainPage from "./mainPage/MainPage";
import "./App.css";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div
      data-bs-theme={`${isDarkMode && "dark"}`}
      className={`${isDarkMode && "bg-dark text-light"}`}
    >
      <header>
        <h1 className="title">
          Science dictionary <br /> LT -{">"} EN
        </h1>
        <div className="dark-button-container">
          <DarkModeButton
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </div>
      </header>

      <main>
        <aside></aside>
        <MainPage />
        <aside></aside>
      </main>
      <footer>
        <p>
          You can find my personal blog and other cool stuff here:{" "}
          <a href="https://www.npw.lt">npw.lt</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

import MainPage from "./mainPage/MainPage";
import "./App.css";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import ArchivePage from "./archivePage/ArchivePage";
import { Tab, Tabs } from "react-bootstrap";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  return (
    <div
      data-bs-theme={`${isDarkMode && "dark"}`}
      className={`${isDarkMode && "bg-dark text-light"}`}
      style={{ minHeight: "100vh" }}
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
        <section>
          <Tabs defaultActiveKey="main-page">
            <Tab
              eventKey="main-page"
              title="Main"
              style={{ marginTop: "20px" }}
            >
              <MainPage />
            </Tab>
            <Tab
              eventKey="archive-page"
              title="Archive"
              style={{ marginTop: "20px" }}
            >
              <ArchivePage />
            </Tab>
          </Tabs>
        </section>
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

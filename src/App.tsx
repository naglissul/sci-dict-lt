import MainPage from "./mainPage/MainPage";
import "./App.css";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import ArchivePage from "./archivePage/ArchivePage";
import { Dropdown, Tab, Tabs } from "react-bootstrap";
import PrivacyComponent from "./components/PrivacyComponent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [lang, setLang] = useState<string>("LT");
  return (
    <div
      data-bs-theme={`${isDarkMode && "dark"}`}
      className={`${isDarkMode && "bg-dark text-light"}`}
      style={{ minHeight: "100vh" }}
    >
      <PrivacyComponent />
      <header>
        <h1 className="title">sci-dict.org</h1>
        <h1 className="subtitle">Mokslinis žodynas</h1>
        <div className="subtitle">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="no-caret">
              {lang}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                NL <em>(coming soon)</em>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          -{">"} EN
        </div>
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

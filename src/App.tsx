import "./App.css";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import ArchivePage from "./LTPage/ArchivePage";
import { Dropdown, Tab, Tabs } from "react-bootstrap";
import PrivacyComponent from "./components/PrivacyComponent";
import LTPage from "./LTPage/LTPage";
import NLPage from "./NLPage/NLPage";
import LTContributePage from "./LTContributePage";

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
        <h1 className="subtitle">
          {lang === "LT"
            ? "Mokslinis žodynas"
            : lang === "NL"
            ? "WetenschappelijkYY woordenboek"
            : "no-lang"}
        </h1>
        <div className="subtitle">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="no-caret">
              {lang}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() =>
                  lang === "LT"
                    ? setLang("NL")
                    : lang === "NL"
                    ? setLang("LT")
                    : setLang("no-lang")
                }
              >
                {lang === "LT" ? "NL" : lang === "NL" ? "LT" : "no-lang"}
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
          <Tabs defaultActiveKey="LT">
            <Tab eventKey="LT" title="LT" style={{ marginTop: "20px" }}>
              <LTPage />
            </Tab>
            <Tab eventKey="NL" title="NL" style={{ marginTop: "20px" }}>
              <NLPage />
            </Tab>
            <Tab
              eventKey="archive-page"
              title="Archive"
              style={{ marginTop: "20px" }}
            >
              <ArchivePage />
            </Tab>
            <Tab
              eventKey="contribute-page"
              title="LT Prisidėk"
              style={{ marginTop: "20px" }}
            >
              <LTContributePage />
            </Tab>
          </Tabs>
        </section>
        <aside></aside>
      </main>
      <footer>
        <p>Last time updated: 2024-03-24</p>
        <p>
          You can find my personal blog and other cool stuff here:{" "}
          <a href="https://www.npw.lt">npw.lt</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

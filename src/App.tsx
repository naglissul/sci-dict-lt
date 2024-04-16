import "./App.css";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import ArchivePage from "./LTPage/ArchivePage";
import { Dropdown, Tab, Tabs } from "react-bootstrap";
import PrivacyComponent from "./components/PrivacyComponent";
import LTPage from "./LTPage/LTPage";
import NLPage from "./NLPage/NLPage";
import LTContributePage from "./LTContributePage";
import TabsContainer from "./components/TabsContainer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UaRuLtPage from "./UaRuLtPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <div
        data-bs-theme={`${isDarkMode && "dark"}`}
        className={`${isDarkMode && "bg-dark text-light"}`}
        style={{ minHeight: "100vh" }}
      >
        <PrivacyComponent />
        <header>
          <h1 className="title">sci-dict.org</h1>
          <h1 className="subtitle">Science dictionary</h1>
          <div className="subtitle">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="no-caret">
                ...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>...</Dropdown.Item>
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
            <Routes>
              <Route index element={<TabsContainer LtTab={<LTPage />} />} />
              <Route
                path="/ua-ru-lt"
                element={<TabsContainer UaRuLtTab={<UaRuLtPage />} />}
              />
              <Route
                path="/archive"
                element={<TabsContainer ArchiveTab={<ArchivePage />} />}
              />
              <Route
                path="/nl"
                element={<TabsContainer NlTab={<NLPage />} />}
              />
              <Route
                path="/lt-contribute"
                element={<TabsContainer ContributeTab={<LTContributePage />} />}
              />
              <Route
                path="*"
                element={
                  <h1 style={{ textAlign: "center" }}>
                    <br />
                    Ups... 404. <br />
                    <Link to="/">Į PRADŽIĄ</Link>
                  </h1>
                }
              />
            </Routes>{" "}
          </section>
          <aside></aside>
        </main>
        <footer>
          <p>Last time updated: 2024-04-16</p>
          <p>
            You can find my personal blog and other cool stuff here:{" "}
            <a href="https://www.npw.lt">npw.lt</a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

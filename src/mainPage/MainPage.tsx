import { Alert, Table } from "react-bootstrap";
import DictWord from "../components/DictWord";
import dict from "../data/dict-archive.json";

function MainPage() {
  return (
    <>
      <h1>Main Page</h1>
      <p>
        Translations are not reviewed - the purpose is just to give a general
        idea of translation, so related content with legit translations be
        possible to "google out".
      </p>
    </>
  );
}

export default MainPage;

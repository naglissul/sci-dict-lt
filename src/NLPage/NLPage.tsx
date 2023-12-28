import { Alert, Table, Card } from "react-bootstrap";
import DictSection from "../components/DictSection";

function NLPage() {
  return (
    <>
      <p>
        This is more of a "how to google" than a "dictionary of scientific
        terms".
      </p>
      <p>
        Translations are not reviewed - the purpose of this is just to give a
        general idea of translation, so it would be possible to "google out"
        related content with legit translations.
      </p>
      <p>
        For a new word / category (for the words from a specific literature) or
        a better translation suggestions please email me{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>{" "}
        or create Pull request on{" "}
        <a href="https://github.com/naglissul/sci-dict-lt">GitHub</a>
      </p>

      <Card style={{ marginBottom: "15px" }}>
        <Card.Body>
          <Card.Title>
            <strong>
              Piniginis parėmimas, kad galėčiau tęsti darbą, tobulinant puslapį:
            </strong>
          </Card.Title>
          <Card.Text
            style={{
              paddingTop: "10px",
              paddingLeft: "30px",
            }}
          >
            <li>
              PayPal donation – gan daug mokesčių PayPal pasiima:{" "}
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=86R4K9Y6BLSXA"
                target="_blank"
                rel="noreferrer"
              >
                donation linkas
              </a>
            </li>
            <li>Revolut pavedimu: Naglis Šuliokas LT943250092929077836</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <hr />
      <DictSection lang="nl" />
    </>
  );
}

export default NLPage;

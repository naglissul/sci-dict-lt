import { Card } from "react-bootstrap";
import DictSection from "../components/DictSection";

function LTPage() {
  return (
    <>
      <p>
        Čia yra daugiau "kaip googlinti" gidas, nei tikslus "mokslinių terminų
        žodynas".
      </p>
      <p>
        Vertimai nėra patvirtinami - šio puslapio tikslas yra tik pateikti
        bendrą idėją vertimams, kad būtų galima "išgooglinti" susijusią
        informaciją su patvirtintais vertimais.
      </p>
      <p>
        Naujam žodžiui / kategorijai (iš konkrečios literatūros) ar geresniems
        vertimų pasiūlymams, prašau rašyti{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>{" "}
        arba sukurti Pull Request{" "}
        <a href="https://github.com/naglissul/sci-dict-lt">GitHub'e</a>
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
      <DictSection lang="lt" />
    </>
  );
}

export default LTPage;

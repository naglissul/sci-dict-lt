import { Alert, Button, Card, Table } from "react-bootstrap";
import DictWord from "./DictWord";
import dict from "../data/dict.json";
import { useState } from "react";

function MainPage() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <section>
      <p>Not reviewed by other people (only me) </p>
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>
              <strong>Give me motivation to do more!</strong>
            </Card.Title>
            <Card.Text>
              <p
                style={{
                  textAlign: `${innerWidth <= 768 ? "right" : "left"}`,
                  paddingTop: "10px",
                  paddingRight: `${innerWidth <= 768 ? "10px" : "0px"}`,
                }}
              >
                <Button
                  variant={isButtonClicked ? "secondary" : "primary"}
                  disabled={isButtonClicked}
                  onClick={() => {
                    if (!isButtonClicked) {
                      setIsButtonClicked(true);
                      fetch(
                        "http://localhost:5000/api/counters/i-was-here/inc",
                        {
                          method: "PATCH",
                        }
                      );
                    }
                  }}
                >
                  I was here
                </Button>
              </p>
              <p>
                By clicking this button you are increasing the public counter
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <p>
        For a new word or a better translation suggestions please email me{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>{" "}
        or create Pull request on{" "}
        <a href="https://github.com/naglissul/sci-dict-lt">GitHub</a>
      </p>

      <hr />
      <Alert variant="info">
        USE CTRL+F OR "FIND IN PAGE" TO FIND YOUR WORD
      </Alert>
      <div className="table-container">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>LT</th>
              <th>EN</th>
              <th>comments</th>
            </tr>
            {dict.map((word) => (
              <DictWord
                key={word.en + word.lt + word.comments}
                lt={word.lt}
                en={word.en}
                comments={word.comments}
              />
            ))}
          </tbody>
        </Table>
      </div>

      <p>Abbreviations:</p>
      <p>
        VU Programų sistemos 2021-2022 pirmasis kursas
        <li>MPS - matematika programų sistemoms I/IIId,</li>
        <li>DM - diskrečioji matematika,</li>
        <li>AT - algoritmų teorija.</li>
      </p>
      <p>Contributors:</p>
      <li>Me (Naglis Šuliokas)</li>
      <li>Tomas Babelis</li>
    </section>
  );
}

export default MainPage;

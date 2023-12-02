import { Alert, Table } from "react-bootstrap";
import DictWord from "../components/DictWord";
import dict from "../data/dict-archive.json";

function ArchivePage() {
  return (
    <>
      <p>Not reviewed by other people (only me) </p>
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
            {dict?.map((word) => (
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
    </>
  );
}

export default ArchivePage;

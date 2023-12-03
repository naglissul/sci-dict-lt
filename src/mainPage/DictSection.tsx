import { Accordion, Table } from "react-bootstrap";
import DictWord from "../components/DictWord";
import tev_10_1_dict from "../data/tev-10-1.json";

export default function DictSection() {
  return (
    <Accordion>
      <Accordion.Item eventKey="tev10-1">
        <Accordion.Header>
          <h2>Matematika tau+ 10 klasė 1 dalis. Leidykla TEV, 2012</h2>
        </Accordion.Header>
        <Accordion.Body>
          <div className="table-container">
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th>LT</th>
                  <th>EN</th>
                  <th>paieškos frazė</th>
                </tr>
                {tev_10_1_dict?.map((word) => (
                  <DictWord key={word.en + word.lt} lt={word.lt} en={word.en} />
                ))}
              </tbody>
            </Table>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

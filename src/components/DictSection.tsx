import { Accordion, Table } from "react-bootstrap";
import DictWord from "./DictWord";
import dict_import from "../data/dict.json";
import literature_list_import from "../data/literature-list.json";

type DictType = {
  [key: string]: { from: string; en: string }[];
};

const dict: DictType = dict_import;

type LiteratureListType = {
  lt: { name: string; id: string }[];
  nl: { name: string; id: string }[];
};

const literature_list: LiteratureListType = literature_list_import;

interface IDictSectionProps {
  lang: "lt" | "nl";
}

export default function DictSection({ lang }: IDictSectionProps) {
  return (
    <Accordion>
      {literature_list[lang].map((book) => (
        <Accordion.Item eventKey={book.id} key={book.id}>
          <Accordion.Header>
            <h2>{book.name}</h2>
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-container">
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>
                      {lang === "lt" ? "LT" : lang === "nl" ? "NL" : "no-lang"}
                    </th>
                    <th>EN</th>
                    <th>
                      {lang === "lt"
                        ? "paieškos frazė"
                        : lang === "nl"
                        ? "zoekterm"
                        : "no-lang"}
                    </th>
                  </tr>
                  {dict[book.id]?.map((word: any) => (
                    <DictWord
                      key={word.en + word.from}
                      from={word.from}
                      en={word.en}
                      lang={lang}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

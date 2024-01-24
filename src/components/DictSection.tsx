import { Accordion, Button, Form, FormControl, Table } from "react-bootstrap";
import DictWord from "./DictWord";
import dict_import from "../data/dict.json";
import literature_list_import from "../data/literature-list.json";
import { useState } from "react";

type DictType = {
  [key: string]: { from: string; en: string }[];
};

const dict: DictType = dict_import;

type LiteratureListType = {
  lt: { name: string; id: string; source?: string }[];
  nl: { name: string; id: string; source?: string }[];
};

const literature_list: LiteratureListType = literature_list_import;

interface IDictSectionProps {
  lang: "lt" | "nl";
}

export default function DictSection({ lang }: IDictSectionProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <FormControl
        type="text"
        placeholder={lang === "lt" ? "Ieškoti" : "Zoeken"}
        className="mr-sm-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        size="lg"
        style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
      />
      {searchTerm && (
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
              {literature_list[lang].map((book) =>
                dict[book.id]?.map((word: any) => {
                  if (
                    word.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    word.from.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return (
                      <DictWord
                        key={word.en + word.from}
                        from={word.from}
                        en={word.en}
                        lang={lang}
                      />
                    );
                  }
                })
              )}
            </tbody>
          </Table>
        </div>
      )}
      <Accordion>
        {literature_list[lang].map((book) => {
          const [bookSearchTerm, setBookSearchTerm] = useState<string>("");
          return (
            <Accordion.Item eventKey={book.id} key={book.id}>
              <Accordion.Header>
                <h2>{book.name}</h2>
                {book.source && (
                  <a href={book.source} style={{ marginLeft: "10px" }}>
                    Source
                  </a>
                )}
              </Accordion.Header>
              <Accordion.Body>
                <FormControl
                  type="text"
                  placeholder={lang === "lt" ? "Ieškoti" : "Zoeken"}
                  className="mr-sm-2"
                  value={bookSearchTerm}
                  onChange={(e) => setBookSearchTerm(e.target.value)}
                  style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
                />
                <div className="table-container">
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <th>
                          {lang === "lt"
                            ? "LT"
                            : lang === "nl"
                            ? "NL"
                            : "no-lang"}
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
                      {dict[book.id]?.map((word: any) => {
                        if (
                          word.en
                            .toLowerCase()
                            .includes(bookSearchTerm.toLowerCase()) ||
                          word.from
                            .toLowerCase()
                            .includes(bookSearchTerm.toLowerCase())
                        ) {
                          return (
                            <DictWord
                              key={word.en + word.from}
                              from={word.from}
                              en={word.en}
                              lang={lang}
                            />
                          );
                        }
                      })}
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

import { Accordion, Button, Form, FormControl, Table } from "react-bootstrap";
import DictWord from "./UaDictWord";
import categories_import from "../data/categories.json";
import dict_import from "../data/dict.json";
import { useState } from "react";
import { randomInt } from "crypto";

type DictType = {
  [key: string]: { lt?: string; en?: string; ru?: string; ua?: string }[];
};

const dict: DictType = dict_import;

type CategoriesListType = {
  ["ua-ru-lt"]: { name: string; id: string; source?: string }[];
};

const categories: CategoriesListType = categories_import;

export default function UaDictSection() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <FormControl
        type="text"
        placeholder="Search"
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
                <th>LT</th>
                <th>EN</th>
                <th>RU</th>
                <th>UA</th>
              </tr>
              {categories["ua-ru-lt"].map((book) =>
                dict[book.id]?.map((word: any) => {
                  if (
                    word.lt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    word.en?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    word.ru?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    word.ua?.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return (
                      <DictWord
                        key={
                          word.en + word.lt + word.ru + word.ua + Math.random()
                        }
                        lt={word.lt}
                        en={word.en}
                        ru={word.ru}
                        ua={word.ua}
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
        {categories["ua-ru-lt"].map((book) => {
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
                  placeholder="Search"
                  className="mr-sm-2"
                  value={bookSearchTerm}
                  onChange={(e) => setBookSearchTerm(e.target.value)}
                  style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
                />
                <div className="table-container">
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <th>LT</th>
                        <th>EN</th>
                        <th>RU</th>
                        <th>UA</th>
                      </tr>
                      {dict[book.id]?.map((word: any) => {
                        if (
                          word.lt
                            ?.toLowerCase()
                            .includes(bookSearchTerm.toLowerCase()) ||
                          word.en
                            ?.toLowerCase()
                            .includes(bookSearchTerm.toLowerCase()) ||
                          word.ru
                            ?.toLowerCase()
                            .includes(bookSearchTerm.toLowerCase()) ||
                          word.ua
                            ?.toLowerCase()
                            .includes(bookSearchTerm.toLowerCase())
                        ) {
                          return (
                            <DictWord
                              key={
                                word.en +
                                word.lt +
                                word.ru +
                                word.ua +
                                Math.random()
                              }
                              lt={word.lt}
                              en={word.en}
                              ru={word.ru}
                              ua={word.ua}
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

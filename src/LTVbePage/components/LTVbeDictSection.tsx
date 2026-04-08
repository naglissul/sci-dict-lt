import { Accordion, FormControl, Table } from "react-bootstrap";
import LTVbeDictWord from "./LTVbeDictWord";
import categories_import from "../data/categories.json";
import dict_import from "../data/dict.json";
import { useState } from "react";

type DictType = {
  [key: string]: {
    lt?: string;
    pl?: string;
    ru?: string;
    ua?: string;
    comment?: string;
  }[];
};

const dict: DictType = dict_import;

type CategoriesListType = {
  ["lt-vbe"]: { name: string; id: string; source?: string }[];
};

const categories: CategoriesListType = categories_import;

export default function LTVbeDictSection() {
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
                <th>PL</th>
                <th>RU</th>
                <th>UA</th>
                <th>Comment</th>
              </tr>
              {categories["lt-vbe"].map((book) =>
                dict[book.id]?.map((word: any) => {
                  if (
                    word.lt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    word.pl?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    word.ru?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    word.ua?.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return (
                      <LTVbeDictWord
                        key={
                          word.lt + word.pl + word.ru + word.ua + Math.random()
                        }
                        lt={word.lt}
                        pl={word.pl}
                        ru={word.ru}
                        ua={word.ua}
                        comment={word.comment}
                      />
                    );
                  }
                }),
              )}
            </tbody>
          </Table>
        </div>
      )}
      <Accordion>
        {categories["lt-vbe"].map((book) => {
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
                        <th>PL</th>
                        <th>RU</th>
                        <th>UA</th>
                        <th>Comment</th>
                      </tr>
                      {dict[book.id]?.map((word: any) => {
                        if (
                          word.lt
                            ?.toLowerCase()
                            .includes(bookSearchTerm.toLowerCase()) ||
                          word.pl
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
                            <LTVbeDictWord
                              key={
                                word.lt +
                                word.pl +
                                word.ru +
                                word.ua +
                                word.comment +
                                Math.random()
                              }
                              lt={word.lt}
                              pl={word.pl}
                              ru={word.ru}
                              ua={word.ua}
                              comment={word.comment}
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

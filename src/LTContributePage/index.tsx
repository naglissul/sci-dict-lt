import { useState } from "react";
import { Button, Form, FormControl, FormLabel, Table } from "react-bootstrap";

export default function LTContributePage() {
  const [input, setInput] = useState<{
    from?: string;
    en?: string;
    literature: string;
  }>();

  const [words, setWords] = useState<
    {
      from?: string;
      en?: string;
      literature: string;
      likes: number;
    }[]
  >([{ from: "test", literature: "test", likes: 0 }]);

  return (
    <>
      <h1>DAR NEVEIKIA</h1>
      <p>
        Čia galite pateikti naujus žodžius su/be vertimų (būtina paminėti
        literatūrą, gali būti ir ne iš dabartinio sąrašo) - žodžiai bus
        peržiūrimi admino (Naglio Šulioko) ir patvirtinami bei įtraukiami į
        ilgalaikį sąrašą (arba nepatvirtinami).
      </p>
      <p>
        Taip pat galite like'inti kitų žmonių parašytus žodžius su/be vertimų
        (kolkas tai tik atkreips dėmesį, vėliau bus padaryta sistema, kuri
        automatiškai patvirtins vertimus su daug like'ų).
      </p>
      <p>
        Kadangi dar nėra labai griežtos automatinės validacijos, nepadorų tekstą
        prašau reportinti paštu{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>
      </p>
      <hr />
      <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Naujo žodžio / žodžių junginio pasiūlymas
      </h3>
      <Form onSubmit={() => alert("thx")}>
        <FormControl
          type="text"
          placeholder="Literatūroje..."
          className="mr-sm-2"
          value={input?.literature}
          onChange={(e) => setInput({ ...input, literature: e.target.value })}
          style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
        />
        <FormControl
          type="text"
          placeholder="Lietuviškai rašoma..."
          className="mr-sm-2"
          value={input?.literature}
          onChange={(e) => setInput({ ...input, literature: e.target.value })}
          style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
        />
        <FormControl
          type="text"
          placeholder="Angliškai sugooglint galima..."
          className="mr-sm-2"
          value={input?.literature}
          onChange={(e) => setInput({ ...input, literature: e.target.value })}
          style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
        />
        <Button variant="primary" type="submit">
          Pateikti (bus matoma viešai)
        </Button>
      </Form>
      <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Kitų pateikti žodžiai, dar nepatvirtinti admino (galima like'inti)
      </h3>
      {words.length < 1 ? (
        "Nėra žodžių"
      ) : (
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>LT</th>
              <th>EN</th>
              <th>Literatūra</th>
              <th>Like'ai</th>
              <th>Nusiųsti like'ą</th>
            </tr>
            {words.map((word) => (
              <tr>
                <td>{word.from ? word.from : <em>nėra vertimo</em>}</td>
                <td>{word.en ? word.en : <em>no translation</em>}</td>
                <td>{word.literature}</td>
                <th>{word.likes}</th>
                <th>
                  <Button>Like</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {/* Reikia keiksmazodziu validacijos - alerta numest "AND... YOURE BANNED*/}
    </>
  );
}

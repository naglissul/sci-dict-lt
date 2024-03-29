import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormLabel, Table } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  runTransaction,
} from "firebase/database";
import { profanityCheck, validateLTShort } from "./inputValidation";

const firebaseConfig = {
  apiKey: "AIzaSyCmOEHthPkRpM7RO40qJUvDpqa9fpUwUDk",
  authDomain: "sci-dict.firebaseapp.com",
  databaseURL:
    "https://sci-dict-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sci-dict",
  storageBucket: "sci-dict.appspot.com",
  messagingSenderId: "859706346326",
  appId: "1:859706346326:web:261df4d5b6f981bf74e4f7",
  measurementId: "G-FNSF0SL3S4",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const wordsRef = ref(db, "words/");

export default function LTContributePage() {
  const [input, setInput] = useState<{
    from?: string;
    en?: string;
    literature: string;
  }>({ from: "", en: "", literature: "" });

  const [words, setWords] = useState<
    {
      id: string;
      from?: string;
      en?: string;
      literature: string;
      likes: number;
      isApproved: boolean;
    }[]
  >([]);

  useEffect(() => {
    onValue(wordsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setWords(Object.values(data));
      }
    });
  }, []);

  const sendSubmitData = () => {
    if (!input.en && !input.from && !input.literature) {
      alert("Pala... Tai gi nieko neįvedei... :(");
      return;
    }
    if (!input?.literature || !input?.from) {
      alert("Literatūra ir lietuviška frazė yra privalomi");
      return;
    }
    if (
      !profanityCheck(input?.literature) ||
      !profanityCheck(input?.from) ||
      (input.en && !profanityCheck(input?.en)) ||
      !validateLTShort(input?.from) ||
      !validateLTShort(input?.literature) ||
      (input.en && !validateLTShort(input?.en))
    ) {
      alert(
        "Nepraėjo validacijos. Jei manai, kad tai klaida, parašyk man į emailą"
      );
      return;
    }

    const newWordRef = push(wordsRef);
    set(newWordRef, {
      id: newWordRef.key,
      from: input?.from,
      en: input?.en,
      literature: input?.literature,
      likes: 0,
      isApproved: false,
    });
    alert("Pateikta, ačiū!");
  };

  const incrementLike = (word: {
    id: string;
    from?: string;
    en?: string;
    literature: string;
    likes: number;
  }) => {
    const db = getDatabase();
    const wordRef = ref(db, `words/${word.id}`);
    set(wordRef, { ...word, likes: word.likes + 1 });
  };

  return (
    <>
      <p>
        Čia galite pateikti naujus žodžius su/be vertimų (būtina paminėti
        literatūrą, gali būti ir ne iš dabartinio sąrašo) - žodžiai bus
        peržiūrimi admino (Naglio Šulioko) pirmiausia nuo nepadoraus ir
        netinkamo teksto, tuomet rodomi lentelėje žemiau ir tada patvirtinami
        bei įtraukiami į ilgalaikį sąrašą (arba nepatvirtinami).
      </p>
      <p>
        Taip pat galite like'inti kitų žmonių parašytus žodžius su/be vertimų
        (kolkas tai tik atkreips dėmesį, vėliau bus padaryta sistema, kuri
        automatiškai patvirtins vertimus su daug like'ų).
      </p>
      <hr />
      <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Naujo žodžio / žodžių junginio pasiūlymas
      </h3>
      <Form>
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
          value={input?.from}
          onChange={(e) => setInput({ ...input, from: e.target.value })}
          style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
        />
        <FormControl
          type="text"
          placeholder="Angliškai sugooglint galima..."
          className="mr-sm-2"
          value={input?.en}
          onChange={(e) => setInput({ ...input, en: e.target.value })}
          style={{ marginBottom: "10px", border: "2px solid #1383bf" }}
        />
        <Button variant="primary" onClick={sendSubmitData}>
          Pateikti admino peržiūrai
        </Button>
      </Form>
      <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Kitų pateikti žodžiai, praėję pirminę admino validaciją, dar neįtraukti
        į ilgalaikį sąrašą (galima like'inti)
      </h3>
      {words.length < 1 ? (
        "Nėra žodžių"
      ) : (
        <div className="table-container">
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>LT</th>
                <th>EN</th>
                <th>Literatūra</th>
                <th>Like'ai</th>
                <th>Nusiųsti like'ą</th>
              </tr>
              {words?.map((word) =>
                word.isApproved ? (
                  <tr key={word.id}>
                    <td>{word.from ? word.from : <em>nėra vertimo</em>}</td>
                    <td>{word.en ? word.en : <em>no translation</em>}</td>
                    <td>{word.literature}</td>
                    <th>{word.likes}</th>
                    <th>
                      <Button onClick={() => incrementLike(word)}>Like</Button>
                    </th>
                  </tr>
                ) : (
                  <tr key={word.id}>
                    <td style={{ color: "grey" }}>
                      Žodis, pateiktas validacijai
                    </td>
                    <td style={{ color: "grey" }}>
                      Žodis, pateiktas validacijai
                    </td>
                    <td style={{ color: "grey" }}>
                      Žodis, pateiktas validacijai
                    </td>
                    <th style={{ color: "grey" }}>0</th>
                    <th>
                      <Button disabled>Like</Button>
                    </th>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

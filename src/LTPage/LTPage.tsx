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
        vertimų pasiūlymams, prašau eiti į skiltį "LT Prisidėk", rašyti{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>{" "}
        arba sukurti Pull Request{" "}
        <a href="https://github.com/naglissul/sci-dict-lt">GitHub'e</a>
      </p>
      <hr />
      <DictSection lang="lt" />
    </>
  );
}

export default LTPage;

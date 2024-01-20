import DictSection from "../components/DictSection";

function NLPage() {
  return (
    <>
      <p>
        Dit is meer een 'hoe te googlen'-gids dan een 'woordenboek met
        wetenschappelijke termen'.
      </p>
      <p>
        Vertalingen worden niet beoordeeld. Het doel hiervan is alleen maar om
        een algemeen idee van de vertaling te geven, zodat het mogelijk zou zijn
        om gerelateerde inhoud te "googlen" met legitieme vertalingen.
      </p>
      <p>
        Voor een nieuw woord/categorie (voor de woorden uit een specifieke
        literatuur) of betere vertaalsuggesties kunt u mij een e-mail sturen{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>{" "}
        of maken een Pull Request op{" "}
        <a href="https://github.com/naglissul/sci-dict-lt">GitHub</a>
      </p>
      {/* <p>
        This is more of a "how to google" guide rather than a "dictionary of scientific
        terms".
      </p>
      <p>
        Translations are not reviewed - the purpose of this is just to give a
        general idea of translation, so it would be possible to "google out"
        related content with legit translations.
      </p>
      <p>
        For a new word / category (for the words from a specific literature) or
        a better translation suggestions please email me{" "}
        <a href="mailto:naglis.suliokas@gmail.com">naglis.suliokas@gmail.com</a>{" "}
        or create Pull request on{" "}
        <a href="https://github.com/naglissul/sci-dict-lt">GitHub</a>
      </p> */}
      <hr />
      <DictSection lang="nl" />
    </>
  );
}

export default NLPage;

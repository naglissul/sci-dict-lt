interface DictWordProps {
  from?: string;
  en?: string;
  comments?: string;
  lang: string;
}

export default function DictWord({ from, en, comments, lang }: DictWordProps) {
  if (lang === "lt") {
    return (
      <tr>
        <td>{from ? from : <em>nėra vertimo</em>}</td>
        <td>{en ? en : <em>no translation</em>}</td>
        {comments && <td>{comments}</td>}
        <td>{from ? `${from} angliškai` : ""}</td>
      </tr>
    );
  } else if (lang === "nl") {
    return (
      <tr>
        <td>{from ? from : <em>geen vertaling</em>}</td>
        <td>{en ? en : <em>no translation</em>}</td>
        {comments && <td>{comments}</td>}
        <td>{from ? `${from} in het Engels` : ""}</td>
      </tr>
    );
  } else {
    return <></>;
  }
}

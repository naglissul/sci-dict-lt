interface DictWordProps {
  lt?: string;
  en?: string;
  comments?: string;
}

export default function DictWord({ lt, en, comments }: DictWordProps) {
  return (
    <tr>
      <td>{lt ? lt : <em>nėra vertimo</em>}</td>
      <td>{en ? en : <em>no translation</em>}</td>
      {comments && <td>{comments}</td>}
      <td>{lt ? `${lt} angliškai` : ""}</td>
    </tr>
  );
}

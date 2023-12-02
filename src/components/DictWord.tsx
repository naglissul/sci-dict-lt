interface DictWordProps {
  lt?: string;
  en?: string;
  comments: string;
}

export default function DictWord({ lt, en, comments }: DictWordProps) {
  return (
    <tr>
      <td>{lt ? lt : <em>no translation</em>}</td>
      <td>{en ? en : <em>no translation</em>}</td>
      <td>{comments ? comments : <em>no comments</em>}</td>
    </tr>
  );
}

interface DictWordProps {
  lt?: string;
  ua?: string;
  ru?: string;
  en?: string;
}

export default function UaDictWord({ lt, ua, ru, en }: DictWordProps) {
  return (
    <tr>
      <td>{lt ? lt : <em>-</em>}</td>
      <td>{en ? en : <em>-</em>}</td>
      <td>{ru ? ru : <em>-</em>}</td>
      <td>{ua ? ua : <em>-</em>}</td>
    </tr>
  );
}

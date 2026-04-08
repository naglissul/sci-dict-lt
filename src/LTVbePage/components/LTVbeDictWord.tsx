interface DictWordProps {
  lt?: string;
  pl?: string;
  ru?: string;
  ua?: string;
}

export default function LTVbeDictWord({ lt, pl, ru, ua }: DictWordProps) {
  return (
    <tr>
      <td>{lt ? lt : <em>-</em>}</td>
      <td>{pl ? pl : <em>-</em>}</td>
      <td>{ru ? ru : <em>-</em>}</td>
      <td>{ua ? ua : <em>-</em>}</td>
    </tr>
  );
}

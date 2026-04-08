interface DictWordProps {
  lt?: string;
  pl?: string;
  ru?: string;
  ua?: string;
  comment?: string;
}

export default function LTVbeDictWord({ lt, pl, ru, ua, comment }: DictWordProps) {
  return (
    <tr>
      <td>{lt ? lt : <em>-</em>}</td>
      <td>{pl ? pl : <em>-</em>}</td>
      <td>{ru ? ru : <em>-</em>}</td>
      <td>{ua ? ua : <em>-</em>}</td>
      <td>{comment ? comment : <em>-</em>}</td>
    </tr>
  );
}

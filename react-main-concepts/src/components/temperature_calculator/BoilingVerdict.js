export default function BoilingVerdict(props) {
  const verdict_sentence =
    props.celsius >= 100
      ? 'The Water would boil.'
      : 'The Water would not boil.';
  return <p>{verdict_sentence}</p>;
}

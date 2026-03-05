import Options from "./Options";

function Questions({ q, dispatch, answer }) {
  return (
    <div>
      <h4>{q.question}</h4>
      <Options q={q} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;

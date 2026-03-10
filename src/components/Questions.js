import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Questions() {
  const { questions, index, dispatch, answer } = useQuiz();
  const q = questions[index];
  return (
    <div>
      <h4>{q.question}</h4>
      <Options q={q} />
    </div>
  );
}

export default Questions;

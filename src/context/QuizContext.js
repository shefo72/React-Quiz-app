import { createContext, useReducer, useContext, useEffect } from "react";
import { questions as questionsData } from "../data/questions";

const QuizContext = createContext();
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  // Loading , Error , Ready , Active , Finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dateReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataLoad":
      return { ...state, status: "loading" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finishedScreen":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action was unkonwn");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPoints = questions.reduce((p, c) => p + c.points, 0);
  const numQuestions = questions.length;

  // if we were to fetch the questions from an API, we would use this code instead of the one below

  // useEffect(() => {
  //   async function fetchApi() {
  //     try {
  //       const res = await fetch("http://localhost:4000/questions");
  //       dispatch({ type: "dataLoad" });
  //       const data = await res.json();
  //       dispatch({ type: "dateReceived", payload: data });
  //     } catch (err) {
  //       dispatch({ type: "dataFailed" });
  //     }
  //   }
  //   fetchApi();
  // }, [dispatch]);

  // load the questions from the local file
  useEffect(() => {
    dispatch({ type: "dataLoad" });

    dispatch({
      type: "dateReceived",
      payload: questionsData,
    });
  }, [dispatch]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        maxPoints,
        numQuestions,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { QuizProvider, useQuiz };

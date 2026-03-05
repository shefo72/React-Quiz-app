export const questions = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10,
  },
  {
    question: "What's the fundamental building block of React apps?",
    options: ["Components", "Blocks", "Elements", "Effects"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "What's the name of the syntax we use to describe the UI in React components?",
    options: ["FBJ", "Babel", "JSX", "ES2015"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "How does data flow naturally in React apps?",
    options: [
      "From parents to children",
      "From children to parents",
      "Both ways",
      "The developers decides",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: "How to pass data into a child component?",
    options: ["State", "Props", "PropTypes", "Parameters"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "When to use derived state?",
    options: [
      "Whenever the state should not trigger a re-render",
      "Whenever the state can be synchronized with an effect",
      "Whenever the state should be accessible to all components",
      "Whenever the state can be computed from another state variable",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question: "What triggers a UI re-render in React?",
    options: [
      "Running an effect",
      "Passing props",
      "Updating state",
      "Adding event listeners to DOM elements",
    ],
    correctOption: 2,
    points: 20,
  },
  {
    question: 'When do we directly "touch" the DOM in React?',
    options: [
      "When we need to listen to an event",
      "When we need to change the UI",
      "When we need to add styles",
      "Almost never",
    ],
    correctOption: 3,
    points: 20,
  },
  {
    question: "In what situation do we use a callback to update state?",
    options: [
      "When updating the state will be slow",
      "When the updated state is very data-intensive",
      "When the state update should happen faster",
      "When the new state depends on the previous state",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question:
      "If we pass a function to useState, when will that function be called?",
    options: [
      "On each re-render",
      "Each time we update the state",
      "Only on the initial render",
      "The first time we update the state",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question:
      "Which hook to use for an API request on the component's initial render?",
    options: ["useState", "useEffect", "useRef", "useReducer"],
    correctOption: 1,
    points: 10,
  },
  {
    question: "Which variables should go into the useEffect dependency array?",
    options: [
      "Usually none",
      "All our state variables",
      "All state and props referenced in the effect",
      "All variables needed for clean up",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: "An effect will always run on the initial render.",
    options: [
      "True",
      "It depends on the dependency array",
      "False",
      "In depends on the code in the effect",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    question: "When will an effect run if it doesn't have a dependency array?",
    options: [
      "Only when the component mounts",
      "Only when the component unmounts",
      "The first time the component re-renders",
      "Each time the component is re-rendered",
    ],
    correctOption: 3,
    points: 20,
  },
  {
    question:
      "What is the best way to pass data deeply into the component tree without prop drilling?",
    options: [
      "Using local storage",
      "Using the Context API",
      "Passing props down every level",
      "Using React Router",
    ],
    correctOption: 1,
    points: 20,
  },
  {
    question: "Why is the `key` prop required when rendering lists in React?",
    options: [
      "To provide an ID for CSS styling",
      "To help React track element changes, additions, and removals efficiently",
      "To securely encrypt list items",
      "To pass data between child elements",
    ],
    correctOption: 1,
    points: 20,
  },
  {
    question:
      "Which hook should you use to keep a mutable value that does NOT cause a re-render when updated?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    correctOption: 2,
    points: 20,
  },
  {
    question: "When is `useReducer` usually preferred over `useState`?",
    options: [
      "When you want to avoid UI re-renders",
      "When the state logic is complex and involves multiple sub-values",
      "When making basic API GET requests",
      "When toggling a simple boolean flag",
    ],
    correctOption: 1,
    points: 30,
  },
  {
    question: "What is a mandatory rule when naming a Custom Hook in React?",
    options: [
      "It must end with 'Hook'",
      "It must start with 'use'",
      "It must be written in snake_case",
      "It can be named anything",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What must a React component return?",
    options: [
      "Multiple sibling elements without a wrapper",
      "A single root DOM node or a React Fragment",
      "An array of strings",
      "A JavaScript class",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "What is the primary purpose of `React.memo`?",
    options: [
      "To memoize expensive mathematical calculations",
      "To cache API responses from the server",
      "To prevent a component from re-rendering if its props haven't changed",
      "To remember the previous state of a component",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: "What does `React.StrictMode` do in a development environment?",
    options: [
      "It intentionally double-invokes components to help find side-effect bugs",
      "It forces the code to compile strictly with TypeScript",
      "It prevents the use of inline CSS",
      "It automatically formats your JavaScript code",
    ],
    correctOption: 0,
    points: 20,
  },
  {
    question:
      "Which hook would you use to cache the result of an expensive calculation?",
    options: ["useCallback", "useMemo", "useRef", "useReducer"],
    correctOption: 1,
    points: 20,
  },
  {
    question: "What does `ReactDOM.createPortal` allow you to do?",
    options: [
      "Create a magical animation effect",
      "Render a component's output into a different part of the DOM tree outside its parent",
      "Automatically route users to a new page",
      "Create a secure connection to a database",
    ],
    correctOption: 1,
    points: 30,
  },
];

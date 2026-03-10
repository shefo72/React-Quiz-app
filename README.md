# React Quiz App ⚛️

A simple and interactive quiz application built with **React**. The app allows users to test their knowledge of React fundamentals through multiple-choice questions, track their score, and view their final result at the end of the quiz.

---

## 🔻Live Demo

Check out the app online: [React Quiz App Live Demo](https://react-quiz-app-hazel-nine.vercel.app/)

---

## ✨ Features

- **State Management:** Uses React's `useReducer` for robust state handling.
- **Context API:** Eliminates prop drilling by providing global quiz state across the application.
- **Dynamic UI:** Smoothly manages `loading`, `error`, `ready`, `active`, and `finished` states.
- **Countdown Timer:** 30 seconds per question; quiz auto-ends when time is up.
- **Progress Tracking:** Visual bar showing current question and score.
- **High Score:** Saves your best score during the session.
- **Flexible Data:** Loads from a local file, with built-in support to switch to a REST API.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shefo72/React-Quiz-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-quiz-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

---

## 📂 Project Structure

```
src
│
├── components
│   ├── Header.js
│   ├── Main.js
│   ├── Loader.js
│   ├── Error.js
│   ├── StartScreen.js
│   ├── Questions.js
│   ├── NextButton.js
│   ├── Progress.js
│   ├── FinishedScreen.js
│   ├── Footer.js
│   ├── Options.js
│   └── Timer.js
│
├── context
│   └── QuizContext.js
│
├── data
│   └── questions.js
|   └── questions.json
│
├── App.js
├── Index.css
└── index.js
```

---

## 🧠 Context API Implementation

This project also demonstrates how to solve a **prop drilling problem** using the **React Context API**.

Key changes:

- Created a global context called **`QuizContext`**.
- Moved the **reducer logic** inside the context.
- Created a custom **`QuizProvider`** to manage and provide state.
- Wrapped the entire application with the provider in **`index.js`**.
- Built a **custom hook** to easily access quiz state across components.
- Removed unnecessary props that were previously passed through multiple components.

---

## 📁 Alternative Version (Without Context)

For learning purposes, the repository also contains an alternative version of the project:

```
src-no-context
```

This folder includes the same quiz application **before implementing the Context API**, where state and props are passed manually through multiple components.

This allows developers to compare two approaches:

- **Prop Drilling Approach**
- **Context API Global State Approach**

and better understand when and why Context API can simplify state management.

---

## ⚙️ Configuration

- **Timer Settings:** You can adjust the time allocated per question by changing the `SECS_PER_QUESTION` constant in `App.js`.
- **API Integration:** To fetch questions from a backend API instead of the local file, uncomment the `useEffect` block containing the `fetch` request in `App.js` and ensure your server is running (e.g., `http://localhost:4000/questions`).

---

## 🔴 Example Question Format

Questions are stored in a local file `data/questions.js` with the following structure:

```javascript
export const questions = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10,
  },
];
```

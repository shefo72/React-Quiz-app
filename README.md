# React Quiz App ⚛️

A simple and interactive quiz application built with **React**. The app allows users to test their knowledge of React fundamentals through multiple-choice questions, track their score, and view their final result at the end of the quiz.

---

## 🔻Live Demo

Check out the app online: [React Quiz App Live Demo](https://react-quiz-app-hazel-nine.vercel.app/)

---

## ✨ Features

- **State Management:** Uses React's `useReducer` for robust state handling.
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
├── data
│   └── questions.js
|   └── questions.json
│
├── App.js
├── DataCounter.js
├── Index.css
└── index.js
```

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

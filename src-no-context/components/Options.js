function Options({ q, dispatch, answer }) {
  const hasAnsewr = answer !== null;
  return (
    <div className="options">
      {q.options.map((o, i) => (
        <button
          key={o}
          className={`btn btn-option 
            ${i === answer ? `answer` : ``}
            ${hasAnsewr ? (i === q.correctOption ? "correct" : `wrong`) : ""} 
        `}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnsewr}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default Options;

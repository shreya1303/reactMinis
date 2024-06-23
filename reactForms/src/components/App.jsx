import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleName(event) {
    console.log(event.target.value);
    setName(event.target.value);
    event.preventDefault();
  }

  function handleHeadingText(event) {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleName}>
        <input
          onChange={handleName}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={handleHeadingText}>Submit</button>
      </form>
    </div>
  );
}

export default App;

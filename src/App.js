import React from "react";
import logo from "./logo.svg";
import "./App.css";

const data = [
  {
    title: "Coding Questions",
    questions: [
      { Q: "Who Built React", A: "FaceBook" },
      { Q: "What was the first text-adventure game built?", A: "Zoltron" },
      { Q: "What is a For-Loop", A: "Run some Functions" },
      { Q: "Why Code?", A: "Its super fun" },
      { Q: "What is React a framework for?", A: "Javascript" },
      { Q: "Are you having Fun", A: "Yes!" },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Jeopardy!</h1>
      </header>
      <div>
        data.map(col (
        <div className="col">
          <h3>{col.title}</h3>
          <div className="questions"></div>
        </div>
        ))
      </div>
    </div>
  );
}

export default App;

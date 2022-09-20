import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    console.log(name, interest, tnc);

    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handel form in React</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms And Conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

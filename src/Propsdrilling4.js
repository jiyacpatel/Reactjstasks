import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function App() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  return (
    <div>
      <Greeting name={name} />
      <NameInput onNameChange={handleNameChange} />
    </div>
  );
}

function Greeting(props) {
  return <h1>Good Morning, {props.name}!</h1>;
}

function NameInput(props) {
  return (
    <div>
      <label>Enter your name: </label>
      <input type="text" onChange={props.onNameChange} />
      <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
    </div>
  );
}

export default App;
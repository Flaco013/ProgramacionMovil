import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  //const [counter, setCounter] = useState(0);
  //const [nombre, setNombre] = useState();

  // function onAdd() {
  //   let resultado = counter++;
  //   setCounter(resultado);
  // }

  // function onReduce() {
  //   let resultado = counter--;
  //   setCounter(resultado);
  // }

  return (
    <div className="App">
      {/* <p>contador</p>
      <p>{counter}</p>
      <p>{nombre}</p>
      <input
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        placeholder="nombre"
      ></input> */}

      <Form></Form>
    </div>
  );
}

export default App;

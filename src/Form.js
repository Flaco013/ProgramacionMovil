import { useState } from "react";
function Form(s) {
  //const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNatonality] = useState("");
  //dds
  function onSetName(e) {
    const inputValue = e.target.value;
    if (!/\d/.test(inputValue)) {
      setName(inputValue);
    }
  }

  function onSetLastName(e) {
    const inputValue = e.target.value;
    if (!/\d/.test(inputValue)) {
      setLastName(inputValue);
    }
  }

  function onSetSecondLastName(e) {
    const inputValue = e.target.value;
    if (!/\d/.test(inputValue)) {
      setSecondLastName(inputValue);
    }
  }

  function onSetEmail(e) {
    const inputValue = e.target.value;

    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(inputValue)) {
      setEmail(inputValue);
    }
  }

  function onSetCellphone(e) {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setCellphone(numericValue);
  }

  function onSetAge(e) {
    const inputValue = e.target.value;
    if (/^\d+$/.test(inputValue)) {
      setAge(inputValue);
    }
  }

  function onSetNatonality(e) {
    const inputValue = e.target.value;
    if (!/\d/.test(inputValue)) {
      setNatonality(inputValue);
    }
  }

  return (
    <>
      <div className="App">
        <h1>Contact Us</h1>

        <label for="name">Name:</label>
        <br />
        <input
          onChange={(e) => onSetName(e)}
          type="text"
          id="name"
          name="name"
          required
        />
        <br />

        <label for="last-name">Last Name:</label>
        <br />
        <input
          onChange={(e) => setLastName(e)}
          type="text"
          id="last-name"
          name="last_name"
          required
        />
        <br />

        <label for="second-last-name">Second Last Name:</label>
        <br />
        <input
          onChange={(e) => setSecondLastName(e)}
          type="text"
          id="second-last-name"
          name="second_last_name"
          required
        />
        <br />

        <label for="email">Email:</label>
        <br />
        <input
          onChange={(e) => setEmail(e)}
          type="email"
          id="email"
          name="email"
          required
        />
        <br />

        <label for="cellphone">Cellphone Number:</label>
        <br />
        <input
          onChange={(e) => setCellphone(e)}
          type="tel"
          id="cellphone"
          name="cellphone"
          required
        />
        <br />
        <label for="age">Age:</label>
        <br />
        <input
          onChange={(e) => setAge(e)}
          type="age"
          id="age"
          name="age"
          required
        />
        <br />
        <label for="Nationality">Nationality:</label>
        <br />
        <input
          onChange={(e) => setNatonality(e)}
          type="Nationality"
          id="Nationality"
          name="Nationality"
          required
        />
        <br />

        <button type="submit">Submit</button>
        <button type="button" class="cancel">
          Cancel
        </button>
      </div>
    </>
  );
}

export default Form;

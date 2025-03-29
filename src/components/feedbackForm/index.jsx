import { useState } from "react";

function FeedbackForm() {
  const [inputName, setInputName] = useState("");

  const handelInputChange = (event) => {
    setInputName(event.target.value);
    console.log(inputName);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setInputName("");
    console.log(inputName);
  };
  return (
    <form onSubmit={handelSubmit}>
      <label>Введите имя</label>
      <input type="text" onChange={handelInputChange} value={inputName} />
      <input type="submit" />
    </form>
  );
}

export default FeedbackForm;

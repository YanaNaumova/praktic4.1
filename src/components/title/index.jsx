import React from "react";
import { useState } from "react";

function Title() {
  const [title, setTitle] = useState("Начальная надпись");
  function chengeTitle(newTitle) {
    setTitle(newTitle);
  }
  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        onChange={(event) => {
          chengeTitle(event.target.value);
        }}
      />
    </div>
  );
}

export default Title;

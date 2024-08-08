import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleContainerClick = (event) => {
    if (event.target.dataset.action === "increment") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div onClick={handleContainerClick}>
      <p>Счетчик: {count}</p>
      <button data-action="increment">plus</button>
      <button data-action="decrement">minus</button>
    </div>
  );
}
export default Counter;

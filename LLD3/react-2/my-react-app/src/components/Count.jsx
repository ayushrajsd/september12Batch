import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const count = val[0]
  //   const setCount = val[1]
  const handleIncrement = () => {
    // count += 1
    setCount(count + 1); // updates the state variable and re-renders the component
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0); // updates the state variable and re-renders the component
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;

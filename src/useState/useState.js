import React, { useState as useStateOfHooks } from "react";

const useState = () => {
  const [item, setItem] = useStateOfHooks(1);

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h1>{item}</h1>
      <button onClick={incrementItem}>Add</button>
      <button onClick={decrementItem}>Minus</button>
    </div>
  );
};

export default useState;

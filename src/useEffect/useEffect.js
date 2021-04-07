import React, { useEffect, useState } from "react";

/**
 * [useEffect]
 * - ComponentDidMount
 *      => useEffect(function, [])
 * - ComponentWillUnMount
 *      =>
 * - ComponentDidUpdate
 *      => useEffect(function, [props])
 * @returns
 */

const UseEffect = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const sayHello = () => console.log("hello");
  useEffect(sayHello, []);

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={() => setNumber1(number1 + 1)}>{number1}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
};

export default UseEffect;

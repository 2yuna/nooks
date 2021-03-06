import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    //componentWillUnmount => (이벤트 삭제 처리)
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

const UseClick = () => {
  const sayHello = () => console.log("say hello!");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default UseClick;

import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const UseBeforeLeave = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);

  return <div>123</div>;
};

export default UseBeforeLeave;

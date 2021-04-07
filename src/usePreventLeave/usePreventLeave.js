import React from "react";

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disblePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disblePrevent };
};

const UsePreventLeave = () => {
  const { enablePrevent, disblePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disblePrevent}>Unprotect</button>
    </div>
  );
};

export default UsePreventLeave;

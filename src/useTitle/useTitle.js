import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // componentDitMount & componentWillUpdate
  useEffect(updateTitle, [title]);
  return setTitle;
};

const UseTitle = () => {
  /**
   * titleUpdate = setTitle 이기 떄문에,
   * 파라미터로 넘겨준 Home으로 title을 변경할 수 있다.
   */
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 500);
  return <div>123</div>;
};

export default UseTitle;

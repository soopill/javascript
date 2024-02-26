import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1);
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>올리기</button>
      <button onClick={onClickCountDown}>내리기</button>
    </div>
  );
}

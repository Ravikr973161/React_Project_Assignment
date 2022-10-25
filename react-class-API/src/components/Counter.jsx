import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  return (
    <>
      <h1 style={{ color: "#FFF" }}>Counter Value - {count}</h1>
      <button>Reset Counter</button>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>Increase Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
    </>
  )
}

export default Counter
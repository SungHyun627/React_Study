import { useState } from "react";
const Counter = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    //   함수형 업데이트
    setNumber((prevNumber) => prevNumber + 1);
    console.log("+1");
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
    console.log("-1");
  };

  return (
    <div>
      <h1>{number}</h1>
      {/* onIncrease()로 설정하면 렌더링되는 시점에서 호출이 된다.
       따라서 이벤트를 설정할 때는 함수타입의 값을 넣어주어야 한다. */}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;

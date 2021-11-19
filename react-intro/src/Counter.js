import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const Counter = () => {
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
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

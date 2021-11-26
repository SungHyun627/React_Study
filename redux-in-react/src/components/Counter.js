// 프리젠테이셔널 컴포넌트 : store에 직접 접근 하지 않고 필요한 값/함수를 props로 받아서 사용하는 component
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    // e.target.value의 type은 문자열
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;

import "./App.css";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  const name = "react";

  const style = {
    backgroundColor: "red",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <Wrapper>
      {/* 조건부 렌더링 isSpecial */}
      {/* props 값 설정을 생략한 True */}
      <Hello name={name} color="red" isSpecial={true} />
      <Hello color="pink" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;

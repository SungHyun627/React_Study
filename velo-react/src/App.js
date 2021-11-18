import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    // 내부 태그에서는 이렇게 작성이 가능합니다.
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <>
      <Hello />
      {/* 주석은 화면에 보이지 않습니다. */}
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;

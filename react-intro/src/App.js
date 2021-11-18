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
      <Hello name={name} color="red" />
      <Hello color="pink" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;

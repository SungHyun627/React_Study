import styled, { css } from "styled-components";
import Button from "./components/Button";

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    // css를 조건부로 보여주고 싶다면 css를 사용
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const App = () => {
  return (
    <AppBlock>
      <Circle color="blue" />
      <Button>BUTTON</Button>
    </AppBlock>
  );
};

export default App;

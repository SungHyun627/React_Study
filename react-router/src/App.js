import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={"./components/Home"} />
      <Route path="/about" component={"./components/About"} />
    </div>
  );
}

export default App;

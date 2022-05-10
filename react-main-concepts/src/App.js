import Hello from './components/hello';
import Element from './components/element';
import Tick from './components/tick';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Hello />
      <Element />
      <Tick />
      <Welcome name="Sara"></Welcome>
    </div>
  );
}

export default App;

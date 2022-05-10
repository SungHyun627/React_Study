import Hello from './components/hello';
import Element from './components/element';
import Clock from './components/clock';
import Welcome from './components/welcome';
import Toggle from './components/toggle';

function App() {
  return (
    <div className="App">
      <Hello />
      <Element />
      <Clock />
      <Welcome name="Sara"></Welcome>
      <Toggle />
    </div>
  );
}

export default App;

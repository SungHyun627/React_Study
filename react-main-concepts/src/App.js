import Hello from './components/hello';
import Element from './components/element';
import Clock from './components/clock';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Hello />
      <Element />
      <Clock />
      <Welcome name="Sara"></Welcome>
    </div>
  );
}

export default App;

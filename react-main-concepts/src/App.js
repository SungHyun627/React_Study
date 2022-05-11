import Hello from './components/hello';
import Element from './components/element';
import Clock from './components/clock';
import Welcome from './components/welcome';
import Toggle from './components/toggle';
import LoginControl from './components/logincontrol';

function App() {
  return (
    <div className="App">
      <Hello />
      <Element />
      <Clock />
      <Welcome name="Sara"></Welcome>
      <Toggle />
      <LoginControl />
    </div>
  );
}

export default App;

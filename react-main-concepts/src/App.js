import Hello from './components/Hello';
import Element from './components/Element';
import Clock from './components/Clock';
import Welcome from './components/Welcome';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import NumberList from './components/NumberList';
import NameForm from './components/NameForm';
import Reservation from './components/Reservation';

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <Hello />
      <Element />
      <Clock />
      <Welcome name="Sara"></Welcome>
      <Toggle />
      <LoginControl />
      <NumberList numbers={numbers} />
      <NameForm />
      <Reservation />
    </div>
  );
}

export default App;

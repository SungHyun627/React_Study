import Hello from './components/hello';
import Element from './components/element';
import Clock from './components/clock';
import Welcome from './components/welcome';
import Toggle from './components/toggle';
import LoginControl from './components/logincontrol';
import NumberList from './components/numberlist';
import NameForm from './components/nameform';
import Reservation from './components/reservation';

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

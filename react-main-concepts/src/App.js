import Hello from './components/Hello';
import Element from './components/Element';
import Clock from './components/Clock';
import Welcome from './components/Welcome';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import NumberList from './components/NumberList';
import NameForm from './components/NameForm';
import Reservation from './components/Reservation';
import Calculator from './components/temperature_calculator/Calculator';
import WelcomeDialog from './components/Dialog/WelcomeDialog';
import SignUpDialog from './components/Dialog/SignUpDialog';

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
      <Calculator />
      <WelcomeDialog />
      <SignUpDialog />
    </div>
  );
}

export default App;

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
import FilterableProductTable from './components/ProductFilter/FilterableProductTable';

const numbers = [1, 2, 3, 4, 5];
const products = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

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
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;

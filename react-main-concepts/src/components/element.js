const name = 'Josh Perez';
const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}

export default function Element() {
  return (
    <div className="element">
      <h1>Hello, {name}</h1>
      <h1>Hello, {formatName(user)}!</h1>
      {getGreeting()}
    </div>
  );
}

import React from 'react';
import Greeting from './greeting';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClock = this.handleLoginClock.bind(this);
    this.handleLogoutClock = this.handleLogoutClock.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClock() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClock() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = isLoggedIn ? (
      <LogoutButton onClick={this.handleLogoutClock} />
    ) : (
      <LoginButton onClick={this.handleLoginClock} />
    );
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

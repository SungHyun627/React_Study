import Dialog from './Dialog';
import React from 'react';

export default class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUP = this.handleSignUP.bind(this);
    this.state = { login: '' };
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }
  handleSignUP(e) {
    console.log(`Welcom ${this.state.login}`);
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUP}>Sign Me Up!</button>
      </Dialog>
    );
  }
}

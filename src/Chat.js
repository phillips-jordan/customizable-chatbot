import React, { Component } from 'react';

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login"
let CHAT_SCREEN = "chat"
let PROFILE_SCREEN = "profile"

class Chat extends Component {
  constructor() {
    super();
    this.state = { allMsgs: [], currentMsg: "" }
    this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit = (event) => {
    // Fires when the submit button is clicked
    this.setState({ allMsgs: this.state.allMsgs.concat(this.state.currentMsg) })
    event.preventDefault();
  }
  changeHandler(event) {
    // Fires when the input box is updated
    this.setState({ currentMsg: event.target.value })
  }
  render() {
    let lify = str => (<li> {this.props.username} {str} </li>)
    return (<div>
      <ul>
        {this.state.allMsgs.map(lify)}
        <li> Some message
          </li>
      </ul>
      <form onSubmit={this.handleSubmit}>
        <label> Chat message <input value={this.state.currentMsg} onChange={this.changeHandler} type="text" /> </label>
        <input type="submit" value="submit"></input>
      </form>
      <button onClick={this.props.gotoSettings}>Go to settings page</button></div>)

  }
}

export default Chat;

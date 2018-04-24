import React, { Component } from "react";
import ChatLine from './ChatLine.js'

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login";
let CHAT_SCREEN = "chat";
let PROFILE_SCREEN = "profile";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { allMsgs: this.props.items, currentMsg: "",
  names: this.props.names };
    this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit = event => {
    let newMsgs = this.state.allMsgs;
    let newNam = this.state.names;
    newMsgs = newMsgs.concat(": "+this.state.currentMsg);
    newNam = newNam.concat(this.props.username);
    newMsgs = newMsgs.concat(this.props.botMessage);
    newNam = newNam.concat("barbara: ");
    newMsgs = newMsgs.concat(this.props.bot2Message);
    newNam = newNam.concat("peter: ");

    // Fires when the submit button is clicked
    this.setState({ allMsgs: newMsgs,
    names: newNam });
    
    this.props.handleChat(newMsgs, newNam);
    event.preventDefault();
  };
  changeHandler(event) {
    // Fires when the input box is updated
    this.setState({ currentMsg: event.target.value });
  }

  handleClear = () => {
    this.setState({ allMsgs: [] });
    this.props.clearChatCounter();
  };

  deleter = (msgs,nam) => {
    this.setState({allMsgs: msgs, names: nam})
  }

  render() {
    // let lify = (str,i) => <li> {this.state.names[i]+ str} </li>;
     return (
      <div>
        <ul><ChatLine
        deleter={this.deleter}
        allMsgs={this.state.allMsgs}
        names={this.state.names}
        /></ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Chat message{" "}
            <input
              value={this.state.currentMsg}
              onChange={this.changeHandler}
              type="text"
            />{" "}
          </label>
          <input type="submit" value="submit" />
        </form>
        <button onClick={this.props.gotoSettings}>Go to settings page</button>
        <button onClick={this.handleClear}>CLEAR CHAT</button>
      </div>
    );
  }
}

export default Chat;

import React, { Component } from 'react';
import Login from './Login.js'
import Chat from './Chat.js'
import Settings from './Settings.js'
import './App.css';

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login"
let CHAT_SCREEN = "chat"
let SETTINGS_SCREEN = "settings"

class App extends Component {
  constructor() {
    super();

    this.state = {
      screen: LOGIN_SCREEN, // The first screen the user sees is the login screen
      username: "noname",
      botMessage: "interesting",
      bot2Message: "Is that so?",
      items: [],
      clickCounter: 0,
      names: []
    }
  }
  loginFinished = (name) => {
    this.setState({
      username: name,
      screen: CHAT_SCREEN,
      clickCounter: this.state.clickCounter + 1
    });
  }
  settingsFinished = (name, names) => {
    this.setState({
      username: name,
      screen: CHAT_SCREEN,
      clickCounter: this.state.clickCounter + 1,
      names: names
    });
  }
  gotoSettings = () => {
    this.setState({
      screen: SETTINGS_SCREEN,
      clickCounter: this.state.clickCounter + 1
    });
  }
  setBotMessage = (msg) => {
    this.setState({ botMessage: msg})
  }
  setBot2Message = (msg) => {
    this.setState({bot2Message: msg,})
  }
  handleChat = (msg, names) => {
    this.setState({
      items: msg,
      clickCounter: this.state.clickCounter + 1,
      names: names
    });
  }
  clearChat = () => {
    this.setState({items: [], clickCounter: this.state.clickCounter+1})
  }

  render() {
    
    if (this.state.screen === LOGIN_SCREEN)
      return (<div>
        <div>{this.state.clickCounter}</div>
        <Login
        loginSubmit={this.loginFinished} />
      </div>);
    if (this.state.screen === CHAT_SCREEN)
      return (<div>
        <div>{this.state.clickCounter}</div>
        <Chat
        clearChatCounter={this.clearChat}
        handleChat={this.handleChat}
        items={this.state.items}
        botMessage={this.state.botMessage}
        bot2Message={this.state.bot2Message}
        gotoSettings={this.gotoSettings}
        username={this.state.username}
        names={this.state.names} />
      </div>);
    if (this.state.screen === SETTINGS_SCREEN)
      return (<div>
        <div>{this.state.clickCounter}</div>
        <Settings
        names={this.state.names}
        botMessage={this.state.botMessage}
        bot2Message={this.state.bot2Message}
        username={this.state.username}
        settingsSubmit={this.settingsFinished}
        setBotMessage={this.setBotMessage}
        setBot2Message={this.setBot2Message} />
      </div>);
    ;
  }
}

export default App;

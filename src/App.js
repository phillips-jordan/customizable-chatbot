import React, { Component } from 'react';
import Login from './Login.js'
import Chat from './Chat.js'
import Settings from './Settings.js'

import logo from './logo.svg';
import './App.css';

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login"
let CHAT_SCREEN = "chat"
let SETTINGS_SCREEN = "settings"

class App extends Component {
  constructor() {
    super();
    // The first screen the user sees is the login screen
    this.state = { 
      screen: LOGIN_SCREEN, 
      username: "noname", 
      botMessage: "interesting" 
    }
  }
  loginFinished = (name) => {
    this.setState({ username: name, screen: CHAT_SCREEN });
  }
  settingsFinished = (name) => {
    this.setState({ username: name, screen: CHAT_SCREEN });
  }
  gotoSettings = () => {
    this.setState({screen: SETTINGS_SCREEN})
  }
  render() {
    if (this.state.screen === LOGIN_SCREEN) return (<Login loginSubmit={this.loginFinished} />);
    if (this.state.screen === CHAT_SCREEN) return (<Chat gotoSettings={this.gotoSettings} username={this.state.username} />);
    if (this.state.screen === SETTINGS_SCREEN) return (<Settings settingsSubmit={this.settingsFinished} />);
  }
}

export default App;

import React, { Component } from 'react';

// There are three different screens. The first screen shown to the user is the login.


class Settings extends Component {
  constructor() {
    super();
    this.state = { currentName: "" }
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.settingsSubmit(this.state.currentName);
  }
  changeHandler = (event) => {
    // Fires when the input box is updated
    this.setState({ currentName: event.target.value })
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label> Change your name to <input value={this.state.currentName} onChange={this.changeHandler} type="text" /> </label>
        <input type="submit" />
    </form>)
      
    }
  }
  
  export default Settings;

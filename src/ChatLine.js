import React, { Component } from "react";

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login";
let CHAT_SCREEN = "chat";
let PROFILE_SCREEN = "profile";

class ChatLine extends Component {
    constructor(props){
        super(props);
        this.state= {
            allMsgs: this.props.allMsgs,
            names: this.props.names

        }
    }

handleClick=(i)=>{
    let newArr= this.props.allMsgs
    let newNam=this.props.names
    console.log(newArr)
    newArr.splice(i.target.value, 1);
    newNam.splice(i.target.value, 1);
  this.setState({
      allMsgs: newArr,
      names: newNam
  })
  this.props.deleter(newArr,newNam)
};
render(){
    let lify = (str,i) => <li key={i}>
        {this.props.names[i]+ str}
        <button value={i} onClick={this.handleClick}> 
        DELETE</button></li>;
   return this.props.allMsgs.map(lify)
}
}

export default ChatLine;

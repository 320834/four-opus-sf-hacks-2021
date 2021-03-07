import React, {Component} from 'react';

class JournalEnter extends Component {
  state = {
    chatbox: '',
    value: ''
  };

  styles = {
    width: 600,
    borderColor: 'transparent',
    defaultValue: 'Hmm..',
    fontSize: 50,
    backgroundColor: 'transparent',
    outline: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    resize: 'none',
    whiteSpace: 'nowrap',
  };

  readOnlyStyles = {
    width: 600,
    borderColor: 'transparent',
    defaultValue: 'Hmm..',
    fontSize: 30,
    backgroundColor: 'transparent',
    outline: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    resize: 'none',
    whiteSpace: 'nowrap',
  };

  handleUpdate = event => {
    this.setState({value: event.target.value});
  };

  handleEnter = event => {
    if (event.keyCode == 13 && event.shiftKey == false) {
      event.preventDefault();
      //this.setState({chatbox: this.chatbox + event.target.value});
      this.setState({value: ''});
    }
  };

  /* 
  handleSubmit = event =>{
    event.preventDefault();
    Actions.sendMessage(this.state.value);
  };
  */

  /*
  updateChat = event => {
    this.setState({value: event.target.chatbox});
  };
  */
  
  

  render () {
    return (
      <div>
        <br />
        <textarea
          style={this.readOnlyStyles}
          ref={c => (this.textarea = c)}
          onChange={this.updateChat}
          readOnly
          id="chat"
        />
        <br />
        <label>Hello. How are you feeling today?</label>
        <form ref = {el => this.myFormRef = el} className = '' onSubmit = {this.handleSubmit}>
          <textarea
            style={this.styles}
            ref={c => (this.textarea = c)}
            onChange = {this.handleUpdate}
            onKeyDown = {this.handleEnter}
            id="input area"
          />
        </form>
      </div>
    );
  }
}

export default JournalEnter;

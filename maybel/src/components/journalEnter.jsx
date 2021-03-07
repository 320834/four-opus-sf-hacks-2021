import React, {Component} from 'react';
import autosize from './autosize'

class JournalEnter extends Component {
    componentDidMount(){
        this.textarea.focus();
        autosize(this.textarea);
    }
  state = {
      textInput: 'Hmm..',
  };
  styles = {
    borderColor: 'transparent',
    defaultValue: 'Hmm..',
    fontSize: 72,
    backgroundColor: 'transparent',
    outline: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    resize: 'none',
    whiteSpace: 'nowrap'

  };

  handleUpdate = () => {
      this.setState({textIn: this.state.textInput});
  }
  
  render () {
    
    return (
        
      <div>
        <label >Hello. How are you feeling today?</label>
        <br />
        <textarea
          style= {this.styles}
          ref = {c => this.textarea = c}
          onChange = {this.handleUpdate}
        ></textarea>
      </div>
    );
  }
}

export default JournalEnter;

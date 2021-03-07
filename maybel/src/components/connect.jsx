import React from "react";
import BASE_URI from "../misc/setup";
import logo from "../misc/sendIcon.png";

import "./styles/connect.css";

export default class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      score: "",
      quote: "",
    };
  }

  styles = {
    width: 600,
    borderColor: "transparent",
    defaultValue: "Hmm..",
    fontSize: 45,
    backgroundColor: "transparent",
    outline: "none",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    resize: "none",
    color: "white",
    whiteSpace: "nowrap",
    textAlign: "center",
    marginBottom: 20,
  };

  buttonStyle = {
    borderColor: "transparent",
    fontSize: 20,
    textTransform: "uppercase",
    backgroundColor: "transparent",
    fontColor: "white",
    outline: "none",
  };

  enterKey = (event) => {
    if (event.keyCode == 13 && event.shiftKey == false) {
      event.preventDefault();
      this.getSentiment();
    }
  };
  getSentiment = async () => {

    // this.setState({result: ""});
    let myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "localhost:5000");

    const raw = JSON.stringify({ text: this.state.text });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    //BASE_URI defined in misc/setup.js
    fetch(`${BASE_URI}/sentiment-json`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ score: data["score"], quote: data["quote"] });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="connect-root">
        <div>
          <h4 style={{ color: "rgba(2, 190, 165, 1)" }}>
            Tell us about your day
          </h4>
          <input
            type="text"
            placeholder="Try typing your feelings here"
            onKeyDown={this.enterKey}
            onChange={(event) => {
              this.setState({ text: event.target.value });
            }}
            name="name"
            style={this.styles}
          />
          <button onClick={this.getSentiment} type="button">
            Enter
          </button>
          <div className="connect-quote fade-in"><b>{this.state.quote}</b></div>
        </div>
      </div>
    );
  }
}

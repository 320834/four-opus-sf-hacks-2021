import React from "react";
import BASE_URI from "../misc/setup";
import TextTransition from "react-text-transition";

import "./styles/connect.css";

export default class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      score: "",
      quote: "",
      resources: []
    };
  }

  styles = {
    width: 600,
    defaultValue: "Hmm..",
    fontSize: 50,
    backgroundColor: "transparent",
    outline: "none",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    resize: "none",
    color: "white",
    whiteSpace: "nowrap",
    textAlign: "center",
    marginBottom: 20,
  };

  enterKey = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      this.getSentiment();
    }
  };
  getSentiment = async () => {

    // Reset quote and input text
    this.setState({quote: "", resources: []}, () => {

        callApi();

    });

    const callApi = () => {
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
          this.setState({ score: data["score"], quote: data["quote"], text: "", resources: data["resources"] }, () => {
            this.displayResources();
          });
        })
        .catch((error) => {
          console.log(error);
        });
      }
  };

  displayResources = () => {
    if(this.state.resources.length > 0)
    {
        let stringResources = ""
        
        this.state.resources.forEach((value) => {
          stringResources += value + "\n"
        })

        alert(`We hope you are doing fine. Please take care of yourself and do not hesitate to get help. More info in the links below\n${stringResources}`)
    }
  }

  render() {
    return (
      <div className="connect-root">

          <h3>Tell us about your day</h3>
          <input
            type="text"
            placeholder="Type your feelings here"
            onKeyDown={this.enterKey}
            value={this.state.text}
            onChange={(event) => {
              this.setState({ text: event.target.value });
            }}
            name="name"
            style={this.styles}
          />
          <button onClick={this.getSentiment} type="button">
            Enter
          </button>
          <div className="connect-quote fade-in">
            <b>
              <TextTransition
                text={this.state.quote}
                style={{textAlign: "center"}}
              >
              </TextTransition>
            </b>
          </div>

      </div>
    );
  }
}

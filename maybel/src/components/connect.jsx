import React from 'react';
import BASE_URI from "../misc/setup";

import "./styles/connect.css"

export default class Connect extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            text: "",
            score: "",
            quote: ""
        }
    }

    getSentiment = async () => {

        let myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "localhost:5000");
    
        let raw = JSON.stringify({"text": this.state.text});
    
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };

        //BASE_URI defined in misc/setup.js
        fetch(`${BASE_URI}/sentiment-json`, requestOptions)
          .then(res => res.json())
          .then((data) => {
            console.log(data)
            this.setState({score: data["score"], quote: data["quote"]})
          })
          .catch((error) => {
              console.log(error)
          })
    
    }

    render()
    {
        return(<div className="connect-root">
            <div>
                <h3>Tell us more about your day</h3>
                <input type="text" onChange={(event) => {this.setState({text: event.target.value})}} name="name" />
                <button onClick={this.getSentiment}>Submit</button>
                <div>{this.state.quote}</div>
            </div>
        </div>)
    }
}
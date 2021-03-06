import React from 'react';
import BASE_URI from "../misc/setup";

export default class Main extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
        text: "",
        result: ""
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

        fetch(`${BASE_URI}/sentiment-json`, requestOptions)
          .then(res => res.json())
          .then((data) => {
            console.log(data)

          })
          .catch((error) => {
              console.log(error)
          })
    
    }

    render()
    {
        return(<div>
            <input type="text" onChange={(event) => {this.setState({text: event.target.value})}} name="name" />
            <button onClick={this.getSentiment}>Submit</button>
            <div>{this.state.result}</div>
        </div>)
    }
}
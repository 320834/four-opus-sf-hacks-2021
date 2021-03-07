import React from "react";
import Connect from "./components/connect";
import Music from "./components/Music";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Music className="music"></Music>
        <Connect></Connect>
      </div>
    );
  }
}

export default App;

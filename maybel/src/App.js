import React from "react";
import Connect from "./components/connect";
import Music from "./components/Music";
import JournalEnter from "./components/journalEnter";

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

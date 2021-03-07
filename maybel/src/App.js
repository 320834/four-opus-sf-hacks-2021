import React from "react";
import Connect from "./components/connect";
import Music from "./components/Music";
import JournalEnter from "./components/journalEnter";

class App extends React.Component {
  render() {
    return (
      <div class="app">
        <Music></Music>
        <Connect></Connect>
      </div>
    );
  }
}

export default App;

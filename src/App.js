import React from "react";
import "./App.css";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";

class App extends React.Component {
  state = {
    percent: 0.5
  };
  updateProgress = (field, val) => {
    this.setState({ [field]: val });
  };

  render() {
    return (
      <div className="App">
        <div className="div">
          <ProgressBar width={400} percent={this.state.percent} />
          <button
            onClick={() =>
              this.updateProgress("percent", this.state.percent + 0.1)
            }
          >
            Add 10%
          </button>
        </div>
      </div>
    );
  }
}

export default App;

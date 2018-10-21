import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProgressBar } from "../../../ducks/reducer";

import "../Home.css";

class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      progressClass: ""
    };
    this.updateProgressBar = this.updateProgressBar.bind(this);
  }

  componentDidMount() {
    this.updateProgressBar();
  }
  updateProgressBar() {
    const { endtime, time } = this.props;
    const percentageWatched = time / endtime;
    console.log(percentageWatched);
    if (percentageWatched < 0.1) {
      this.setState({ progressClass: "underOne" });
    } else if (percentageWatched >= 0.1 && percentageWatched < 0.2) {
      this.setState({ progressClass: "one" });
    } else if (percentageWatched >= 0.2 && percentageWatched < 0.3) {
      this.setState({ progressClass: "two" });
    } else if (percentageWatched >= 0.3 && percentageWatched < 0.4) {
      this.setState({ progressClass: "three" });
    } else if (percentageWatched >= 0.4 && percentageWatched < 0.5) {
      this.setState({ progressClass: "four" });
    } else if (percentageWatched >= 0.5 && percentageWatched < 0.6) {
      this.setState({ progressClass: "five" });
    } else if (percentageWatched >= 0.6 && percentageWatched < 0.7) {
      this.setState({ progressClass: "six" });
    } else if (percentageWatched >= 0.7 && percentageWatched < 0.8) {
      this.setState({ progressClass: "seven" });
    } else if (percentageWatched >= 0.8 && percentageWatched < 0.9) {
      this.setState({ progressClass: "eight" });
    } else if (percentageWatched >= 0.9 && percentageWatched < 1) {
      this.setState({ progressClass: "nine" });
    } else {
      this.setState({ progressClass: "complete" });
    }
  }

  render() {
    return (
      <div className="progressBarContainer">
        <div className="progressBar" id={this.state.progressClass} />
      </div>
    );
  }
}

let mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateProgressBar }
)(ProgressBar);

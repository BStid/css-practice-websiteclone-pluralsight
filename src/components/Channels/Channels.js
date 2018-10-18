import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import "./Channels.css";

class Channels extends Component {
  render() {
    return (
      <div className="channelsOuter">
        <h1>Channels</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Channels);

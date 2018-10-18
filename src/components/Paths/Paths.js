import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import "./Paths.css";

class Paths extends Component {
  render() {
    return (
      <div className="pathsOuter">
        <h1>Paths</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Paths);

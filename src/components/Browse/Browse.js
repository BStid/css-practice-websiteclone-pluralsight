import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import "./Browse.css";

class Browse extends Component {
  render() {
    return (
      <div className="browseOuter">
        <h1>Browse</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Browse);

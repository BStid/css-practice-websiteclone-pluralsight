import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import "./Notes.css";

class Notes extends Component {
  render() {
    return (
      <div className="notesOuter">
        <h1>Notes</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Notes);

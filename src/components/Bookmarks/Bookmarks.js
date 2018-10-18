import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import "./Bookmarks.css";

class Bookmarks extends Component {
  render() {
    return (
      <div className="bookmarksOuter">
        <h1>Bookmarks</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Bookmarks);

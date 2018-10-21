import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getItems } from "../../../ducks/reducer";
import orangeArrow from "../../../pictures/orangeArrow.svg";
import arrow from "../../../pictures/arrow.svg";
import ProgressBar from "./ProgressBar";
import "../Home.css";

class ContinueWatching extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    let displayWatchedContent = this.props.items.map((value, index) => {
      return (
        <div key={value.id} className="cwDiv">
          <img src={value.demo_image} className="cwPicture" alt="" />
          <ProgressBar time={value.demo_time} endtime={value.demo_end_time} />
          <h1 className="cwText">{value.demo_name}</h1>
        </div>
      );
    });
    return (
      <div className="continueWatchingContainer">
        <div className="cwTitle">
          {" "}
          Continue learning{" "}
          <Link to="/paths" className="bottomText" id="cwViewAll">
            View all
            <img src={orangeArrow} alt="" className="orangeArrow" />
          </Link>
        </div>
        <div className="recentlyWatched">
          {displayWatchedContent}
          <img src={arrow} alt="" className="nextArrow" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getItems }
)(ContinueWatching);

import React, { Component } from "react";
import "./Nav.css";
import { updateInput } from "../../ducks/reducer";
import searchIcon from "./pictures/search.svg";
import moreIcon from "./pictures/moreIcon.svg";
import userDefaultIcon from "./pictures/userDefault.png";
import { connect } from "react-redux";

class TopNav extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='topNavContainer'>
        <div className="header">
          <img src={searchIcon} alt="search" className="searchIcon" />
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="searchBar"
            name="search"
            onChange={e => this.props.updateInput(e)}
          />
          <div className="filler" />
          {this.props.input && this.props.input}

          <div className="userProfileCard">
            <div className="userInfo">
              <p className="userName">User</p>
              <br />
              <p className="userEmail">thisismyemail@email.com</p>
            </div>
            <img
              src={userDefaultIcon}
              alt="user picture"
              className="userImage"
            />
          </div>
          <div className="moreContainer">
            <img src={moreIcon} alt="more" className="moreIcon" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.input
  };
};
export default connect(
  mapStateToProps,
  { updateInput }
)(TopNav);

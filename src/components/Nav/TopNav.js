import React, { Component } from "react";
import "./Nav.css";
import searchIcon from "./pictures/search.svg";
import moreIcon from "./pictures/moreIcon.svg";
import userDefaultIcon from "./pictures/userDefault.png";

export default function TopNav() {
  return (
    <div>
      <div className="header">
        <img src={searchIcon} alt="search" className="searchIcon" />
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="searchBar"
        />
        <div className="filler" />
        <div className="userProfileCard">
          <div className="userInfo">
            <p className="userName">User</p>
            <br />
            <p className="userEmail">thisismyemail@email.com</p>
          </div>
          <img src={userDefaultIcon} alt="user picture" className="userImage" />
        </div>
        <div className="moreContainer">
          <img src={moreIcon} alt="more" className="moreIcon" />
        </div>
      </div>
    </div>
  );
}

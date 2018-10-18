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
          User Name
          <br />
          Email
          <img src={userDefaultIcon} alt="user picture" className="userImage" />
        </div>
        <div className="moreContainer">
          <img src={moreIcon} alt="more" className="moreIcon" />
        </div>
      </div>
    </div>
  );
}

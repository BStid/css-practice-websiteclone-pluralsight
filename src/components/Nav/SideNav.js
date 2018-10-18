import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./pictures/pluralsight_logo.svg";
import homeIcon from "./pictures/home.svg";
import channelsIcon from "./pictures/channels.svg";
import notesIcon from "./pictures/notes.svg";
import pathsIcon from "./pictures/paths.svg";
import browseIcon from "./pictures/browse.svg";
import bookmarksIcon from "./pictures/bookmark.svg";

import "./Nav.css";

class nav extends Component {
  render() {
    return (
      <div className="sideContainer">
        <Link to="/">
          <div className="iconHomePage">
            <img src={logo} alt="logo" className="logo" />
            <p className="pluralSightText">PLURALSIGHT</p>
          </div>
        </Link>
        <div className="sideNav">
          <Link to="/" render>
            <div className="homeButton">
              <img src={homeIcon} alt="home icon" className="homeIcon" />
              Home
            </div>
          </Link>
          <Link to="/browse">
            <div className="browseButton">
              <img src={browseIcon} alt="browse icon" className="browseIcon" />
              Browse
            </div>
          </Link>
          <Link to="/paths">
            <div className="pathsButton">
              <img src={pathsIcon} alt="paths icon" className="pathsIcon" />
              Paths
            </div>
          </Link>
          <Link to="/channels">
            <div className="channelsButton">
              <img
                src={channelsIcon}
                alt="channels icon"
                className="channelsIcon"
              />
              Channels
            </div>
          </Link>
          <Link to="/bookmarks">
            <div className="bookmarksButton">
              <img
                src={bookmarksIcon}
                alt="bookmarks icon"
                className="bookmarksIcon"
              />
              Bookmarks
            </div>
          </Link>
          <Link to="/notes">
            <div className="notesButton">
              <img src={notesIcon} alt="notes icon" className="notesIcon" />
              Notes
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default nav;

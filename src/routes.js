import React from "react";
import { Switch, Route } from "react-router-dom";

// Import any Components that you will be Routing to...
import Home from "./components/Home/Home";
import Browse from "./components/Browse/Browse";
import Paths from "./components/Paths/Paths";
import Channels from "./components/Channels/Channels";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Notes from "./components/Notes/Notes";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/browse" component={Browse} />
    <Route path="/paths" component={Paths} />
    <Route path="/channels" component={Channels} />
    <Route path="/bookmarks" component={Bookmarks} />
    <Route path="/notes" component={Notes} />
    <Route
      path="*"
      render={() => (
        <div className="redirectPage">
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);

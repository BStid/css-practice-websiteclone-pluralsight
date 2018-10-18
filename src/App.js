import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./ducks/store";
import routes from "./routes";
import SideNav from "./components/Nav/SideNav";
import TopNav from "./components/Nav/TopNav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="outerDiv">
            <SideNav />
            <div className="mainContentDiv">
              <TopNav />
              {routes}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

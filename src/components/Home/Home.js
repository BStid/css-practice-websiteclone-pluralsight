import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import Select from "react-select";
import { Link } from "react-router-dom";
import orangeArrow from "../../pictures/orangeArrow.svg";
import roleIQ from "./pictures/roleIQ.svg";
import "./Home.css";

class Home extends Component {
  render() {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];
    return (
      <div className="homeOuter">
        <div className="topHomeDiv">
          <div className="leadText">
            Level up with <img src={roleIQ} className="roleIQpic" alt="" />
          </div>
          <p className="subTextHome">
            See if you have the skills needed for your role and what you need to
            learn next.
          </p>
          <div className="dropDownButton">
            <Select
              options={options}
              placeholder="Choose a role"
              className="selectBox"
            />{" "}
            <button className="roleIQButton">Get your RoleIQ</button>
          </div>
          <Link to="/paths" className="bottomText">
            View all roles
            <img src={orangeArrow} alt="" className="orangeArrow" />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);

import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import { getItems } from "../../ducks/reducer";
import "./Browse.css";

class Browse extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getItems();
  }
  render() {
    console.log(this.props.items);
    let itemList = this.props.items.map((value, index) => {
      return (
        <div key={value.id} className="browseContainer">
          <img src={value.demo_image} className="pictures" alt="" />
          <h1>{value.demo_name}</h1>
        </div>
      );
    });
    return <div className="browseOuter">{itemList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { getItems }
)(Browse);

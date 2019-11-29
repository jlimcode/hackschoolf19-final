import React, { Component } from "react";
import "./ViewDrawing.css";

class ViewDrawing extends Component {
  render() {
    return (
      <div className="Drawing-container">
        <img
          src={"/picture/" + this.props.id}
          alt="A drawing of a professor"
          className="Drawing-image"
        ></img>
        <p className="Drawing-text">Professor: {this.props.professor}</p>
        <p className="Drawing-text">Artist: {this.props.artist}</p>
      </div>
    );
  }
}

export default ViewDrawing;

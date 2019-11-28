import React, { Component } from "react";
import DrawableCanvas from "./DrawableCanvas";
import "./AddDrawing.css"

class AddDrawing extends Component {
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
    this.canvasRef = React.createRef();
    this.state = {
      professor: "",
      artist: ""
    };
  }

  handleProfessorInput(event) {
    this.setState({ professor: event.target.value });
  }

  handleArtistInput(event) {
    this.setState({ artist: event.target.value });
  }

  handleClear() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      canvas.clear();
    }
  }

  handleSubmit() {
    //TODO Handle submit function
  }

  render() {
    return (
      <div className="AddDrawing">
        <DrawableCanvas ref={this.canvasRef} />
        <div className="AddDrawing-toolbar">
          <div className="AddDrawing-row-container">
            <div className="AddDrawing-row">
              <p className="AddDrawing-text">Professor</p>
              <input
                className="AddDrawing-input"
                onChange={this.handleProfessorInput.bind(this)}
              ></input>
            </div>
            <div className="AddDrawing-row">
              <p className="AddDrawing-text">Artist</p>
              <input
                className="AddDrawing-input"
                onChange={this.handleArtistInput.bind(this)}
              ></input>
            </div>
          </div>
          <div className="AddDrawing-button-container">
            <button className="AddDrawing-button" onClick={this.handleClear}>
              Clear
            </button>
            <button className="AddDrawing-button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddDrawing;

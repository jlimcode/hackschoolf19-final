import React from "react";
import AddDrawing from "./AddDrawing";
import ViewDrawing from "./ViewDrawing";
import Header from "./Header";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    const res = await fetch("/picture");
    const resJSON = await res.json();
    this.setState({ images: resJSON });
  }

  render() {
    const drawingElements = this.state.images.map(obj => {
      return (
        <ViewDrawing
          artist={obj.artist}
          professor={obj.professor}
          id={obj.id}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <AddDrawing />
        <h1 className="App-header">Other works</h1>
        <div className="App-container">{drawingElements}</div>
      </div>
    );
  }
}

export default App;

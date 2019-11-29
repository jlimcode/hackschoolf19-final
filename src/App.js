import React from 'react';
import AddDrawing from './AddDrawing'
import Header from './Header'
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Header/>
      <AddDrawing/>
      <h1 className="App-header">Other works.</h1>
      <div className="App-container">

      </div>
    </div>
  );
}

export default App;

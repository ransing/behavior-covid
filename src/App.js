import React from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './Questions';
import Graph from './Graph'
import Main from './Main'
import Line from './Line';
import Rechart from './chart/rechart';
import Form from './form/Form'

function App() {
  return (
    <div className="App" style={{height:500}}>
      
      <Form />
      {/* <Questions /> */}
      {/* <Graph /> */}
      {/* <Line/> */}
      {/* <Main /> */}
      <Rechart/>

    </div>
  );
}

export default App;

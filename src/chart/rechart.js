import React, { Component } from 'react';
import { render } from 'react-dom';

import { ResponsiveContainer, Line, LineChart, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';

export default class Chart extends Component {
  constructor() {
    super();
    this.state = {
      rechartData: [
        {name: 'Day 1', Interest: 7, Depressed: 4, Sleep: 6, Energy:4, Appetite: 5},
        {name: 'Day 2', Interest: 6, Depressed: 6, Sleep: 5, Energy:7, Appetite: 3},
        {name: 'Day 3', Interest: 3, Depressed: 5, Sleep: 4, Energy:6, Appetite: 7},
        {name: 'Day 4', Interest: 8, Depressed: 6, Sleep: 6, Energy:7, Appetite: 4},
        {name: 'Day 5', Interest: 2, Depressed: 10, Sleep: 7, Energy:6, Appetite: 3},
        {name: 'Day 6', Interest: 5, Depressed: 7, Sleep: 8, Energy:7, Appetite: 5},
        {name: 'Day 7', Interest: 8, Depressed: 3, Sleep: 9, Energy:5, Appetite: 3},
      ],
      isActive: false
    };
  }

  onMouseDownHandler = (event, type) => {
    console.info(type, event)
    this.setState({ isActive: type })
  };

  onMouseUpHandler = () => this.setState({ isActive: false });

  onMouseMoveHandler = event => {
    if (!this.state.isActive) return;

    console.warn(event)
  }

  createLine = (type, colour) => (
    <Line 
      activeDot={{ 
        // onMouseUp: this.onMouseUpHandler,
        onMouseDown: event => this.onMouseDownHandler(type, event)
      }}
      type="natural" 
      dataKey={type} 
      stroke={colour} />
  )

  render() {
    return (
      <ResponsiveContainer height={'100%'} width={'100%'}>
        <LineChart data={this.state.rechartData}
          onMouseUp={this.onMouseUpHandler}
          onMouseMove={this.onMouseMoveHandler}
          margin={{ top: 2, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {this.createLine('Interest', 'green')}
            {this.createLine('Depressed', 'black')}
            {this.createLine('Sleep', 'purple')}
            {this.createLine('Energy', 'red')}
            {this.createLine('Appetite', 'magenta')}
          </LineChart>
      </ResponsiveContainer>
    );
  }
}

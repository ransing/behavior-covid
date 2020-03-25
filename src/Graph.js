import React, { Component } from 'react';
import Line from './Line';
import Line1 from './components/line1.js'


export default class Graph extends Component {
    render() {
        return (
            <>
            <div className="App">
                <div style={{ height: 500, width:700 }}>
                    <Line />
                    <Line1/> 
                </div>
            </div>
            </>
        )
    }
}

import React from 'react';

import './index.css';

export default class Rules extends React.Component {
    
    render() {
    
        return (
            <div className = 'rules'>
                <h2>Rules For Conway's Game of Life:</h2>
                <ol>
                    <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation. </li>
                    <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction. </li>
                </ol>
                
            </div>
        )
    }

}
import React from 'react';

import './index.css';

export default class About extends React.Component {
    render() {
        return (
            <div className="rules">
                <h2>About John Conway</h2>
                <p>John Horton Conway was an English mathematician who spent half of his career at the University of Cambridge before moving to America and teaching at Princeton.</p>
                <br></br>
                <h2>About Conway's Game:</h2>
                <p>John Conway was best known for creating the Game of Life, which helped launch a new branch of mathematics, the field of cellular automata.</p>
            </div>
        )
    }
}
import React from 'react';

import '../index.css';

export default class ButtonInfo extends React.Component {
    render() {
        return (
            <div className="rules">
                <h2>My Implementation</h2>
                <br></br>
                <h3>Edge:</h3>
                <p>All cells that leave the bounds of the displayed grid are dead.</p>
                <br></br>
                <h3>Buttons:</h3>
                <ol className="implementation">
                    <li>Play: Plays the game</li>
                    <li>Pause: Pauses the game</li>
                    <li>Slow: Slows the game speed</li>
                    <li>Fast: Speeds the game speed</li>
                    <li>Big Population: Randomly populates the game.  Each cell will have a one in three chance of starting out alive.</li>
                    <li>Medium Population: Randomly populates the game.  Each cell will have a one in seven chance of starting out alive.</li>
                    <li>Small Population: Randomly populates the game.  Each cell will have a one in twelve chance of starting out alive.</li>
                    <li>Clear: Plays the game</li>
                    <li>Change Grid: Changes grid size</li>
                    
                </ol>
            </div>
        )
    }
}
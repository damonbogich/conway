import React from 'react';

import Grid from './grid/Grid.js'
import Buttons from './buttons/Buttons.js'
import ButtonInfo from './buttons/ButtonInfo.js'
import Rules from './Rules.js'
import About from './About.js'

import './index.css';


class App extends React.Component {
	constructor() {
		super();
		this.speed = 100;
		this.rows = 30;
		this.cols = 50;

		this.state = {
			generation: 0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	selectBox = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
		});
	}

	populate = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 3) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
  }
  
  populate2 = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 7) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
  }

  populate3 = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 12) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
  }

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	slow = () => {
		this.speed = 1000;
		this.playButton();
	}

	fast = () => {
		this.speed = 100;
		this.playButton();
	}

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
			generation: 0
		});
  }
  
  gridSize1 = () => {
	
			
    this.cols = 25;
    this.rows = 25;
    this.clear();
}

	gridSize2 = () => {
	
			
				this.cols = 40;
				this.rows = 40;
		    this.clear();
  }

  
  
  

	play = () => {
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);
      //loop rows
		for (let i = 0; i < this.rows; i++) {
      //loop columns
		  for (let j = 0; j < this.cols; j++) {
        let neighbors = 0;

        // check left
        if (i > 0) if (g[i - 1][j]) neighbors++;
        // check top left
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) neighbors++;
        // check bottom left
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) neighbors++;
        //check below
        if (j < this.cols - 1) if (g[i][j + 1]) neighbors++;
        // check above
        if (j > 0) if (g[i][j - 1]) neighbors++;
        // check right
        if (i < this.rows - 1) if (g[i + 1][j]) neighbors++;
        // check top right
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) neighbors++;
        // check bottom right
        if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) neighbors++;
        

        // if alive and neighbors less than two or greater than 3: dead
        if (g[i][j] && (neighbors < 2 || neighbors > 3)) g2[i][j] = false;
        //if dead and has 3 live neighbors: alive
		    if (!g[i][j] && neighbors === 3) g2[i][j] = true;
        
		  }
		}
		this.setState({
		  gridFull: g2,
		  generation: this.state.generation + 1
		});

	}

	componentDidMount() {
		this.populate();
		this.playButton();
	}

	render() {
		return (
			<div>
				<h1>Bogich's Game of Life</h1>
        <About/>
        <Rules/>
        <ButtonInfo/>
				<Buttons
					playButton={this.playButton}
					pauseButton={this.pauseButton}
					slow={this.slow}
					fast={this.fast}
					clear={this.clear}
          populate={this.populate}
          populate2={this.populate2}
          populate3={this.populate3}
          gridSize={this.gridSize1}
          gridSize2={this.gridSize2}
				/>
				<Grid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>
				<h2>Generations: {this.state.generation}</h2>
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default App;

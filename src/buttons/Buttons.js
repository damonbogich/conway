import React from 'react';

import '../index.css';
import { ButtonToolbar } from 'reactstrap';


export default class Buttons extends React.Component {

	render() {
		return (
			<div className="center">
				<ButtonToolbar>
					<button className="btn btn-default" onClick={this.props.playButton}>
						Play
					</button>
					<button className="btn btn-default" onClick={this.props.pauseButton}>
					  Pause
					</button>
					<button className="btn btn-default" onClick={this.props.slow}>
					  Slow
					</button>
					<button className="btn btn-default" onClick={this.props.fast}>
					  Fast
					</button>
					<button className="btn btn-default" onClick={this.props.populate}>
					  Big Population
					</button>
                    <button className="btn btn-default" onClick={this.props.populate2}>
					  Medium Population
					</button>
                    <button className="btn btn-default" onClick={this.props.populate3}>
					  Small Population
					</button>
                    <button className="btn btn-default" onClick={this.props.clear}>
					  Clear
					</button>
                    
                    <button className="btn btn-default" eventKey="1" onClick={this.props.gridSize2}>
                        Change Grid
                    </button>
                    
				</ButtonToolbar>
			</div>
			)
	}
}
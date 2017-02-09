import React, { Component } from 'react';

class DRSelection extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	renderRangeInfo() {
		const object = this.props.selection;
		
		if(object === null) return <div/>;

		return (
			<div>
				<div className="dr-toolbox-listitem">
					<label>{object.title}</label>					
				</div>
				<div className="dr-toolbox-listitem">
					<label>[{object.start}-{object.end}]</label>
				</div>
			</div>
		);
	}

	render(){
		const object = this.props.selectedObject;

		return (
			<div className="dr-box dr-toolbox-rules">
				<label>{ object ? "SELECTED RANGE" : "NO SELECTION"}</label>
				{[this.renderRangeInfo()]}
			</div>
		)
	}
}

export default DRSelection;
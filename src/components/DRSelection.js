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

	renderHeader(object) {
		const title = object ? "SELECTED RANGE" : "NO SELECTION";
		return <label>{title}</label>;
	}

	render(){
		const object = this.props.selectedObject;

		return (
			<div className="dr-box dr-toolbox-rules">
				{object && this.renderHeader()}
				{this.renderRangeInfo(object)}
			</div>
		)
	}
}

export default DRSelection;
import React, { Component } from 'react';

class DRRanges extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div className="dr-box dr-toolbox-ranges">
				<label>RANGES</label>
				{this.props.ranges.map(range => {
					let key = "key_" + range.start + "_" + range.end;
					return (
						<div key={key} className="dr-toolbox-listitem">
							<label>{range.title} [{range.start} - {range.end}]</label>
						</div>
					)
				})}
				<button>Add Range</button>
			</div>
		);
	}
}

export default DRRanges;
import React, { Component } from 'react';

class DRRanges extends Component {
	render() {
		return (
			<div className="dr-box dr-toolbox-ranges">
				<label>RANGES</label>
				{this.props.ranges.map(range => {
					const key = "key_" + range.start + "_" + range.end;
					return (
						<div key={key} className="dr-toolbox-listitem">
							<a href="#" onClick={() => this.props.onRangeClick(range)}>
								{range.title} [{range.start} - {range.end}]
							</a>
						</div>
					)
				})}
				<button>Add Range</button>
			</div>
		);
	}
}

export default DRRanges;
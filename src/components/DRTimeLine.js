import React, { Component } from 'react';

var colors = ["blue", "green"];

class DRTimeLine extends Component {
	render() {
		return (
			<div className="dr-timeline">
				{this.props.ranges.map((range, index) => {
					let startPos = Math.floor(640 * range.start/100.0);
					let endPos = Math.floor(640 * range.end/100.0);  
					let width = endPos - startPos;
					let key = "key_" + startPos + "_" + endPos;
					let color = colors[index % colors.length];
					return <div key={key} 
								className="dr-timeline-range" 
								onClick={()=> this.props.onRangeClick(range)}
								style={{left: startPos, width: width, backgroundColor: color}}></div>
				})}
			</div>
		);
	}

}

export default DRTimeLine;
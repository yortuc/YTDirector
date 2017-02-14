import React, { Component } from 'react';

var colors = ["blue", "green", "red"];

class DRTimeLine extends Component {
	render() {
		const curTimePos = Math.floor(640 * this.props.currentTime/100.0);
		console.log(curTimePos);

		return (
			<div className="dr-timeline">
				<div className="dr-timeline-range dr-timeline-cursor"
					 style={{left: curTimePos}}></div>

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
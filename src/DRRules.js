import React, { Component } from 'react';

class DRRules extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div className="dr-box dr-toolbox-rules">
				<label>RULES</label>
				{this.props.rules.map(rule => {
					return (
						<div key={rule.id} className="dr-toolbox-listitem">
							<label>{rule.type}</label>
						</div>
					)
				})}
				<button>Add Rule</button>
			</div>
		);
	}
}

export default DRRules;
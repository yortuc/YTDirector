class DRRuleEngine {
	constructor(props, player) {		
		this.ranges = props.ranges.map(rangeData => new Range(rangeData));
		DRRuleEngine.getRangeById = createGetRangeById(this.ranges);
		
		this.rules = props.rules.map(ruleData => createRule(ruleData, player));

		console.log(this.rules, this.ranges);
	}

	run(currentTime){
		this.rules.map(rule=> rule.run(currentTime));
	}
}

function createRule(ruleData, player) {
	if(ruleData.type === 0) {
		return new RuleRepeat(ruleData, player);
	}
}

function createGetRangeById(ranges){
	return function(rangeId) {
		return ranges.find(range => range.id === rangeId);
	}
}

class RuleRepeat {
	constructor(props, player) {		
		this.player = player;
		this.id = props.id;
		this.type = props.type;	
		this.repeatCount = props.repeatCount;
		this.range = DRRuleEngine.getRangeById(props.rangeId);
	}

	run(currentTime) {
//		console.log("running ruleRepeat", currentTime, this.range.end);

		if(this.repeatCount > 1 && (this.range.end - currentTime) < 0.008){
			this.repeatCount -= 1;
			this.player.seekTo(this.range.start);
		}
	}
}

class Range {
	constructor(props) {
		this.id = props.id;
		this.title = props.title;
		this.start = props.start;
		this.end = props.end;
	}
}

export default DRRuleEngine;
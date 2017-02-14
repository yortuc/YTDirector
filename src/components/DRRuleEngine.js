class Range {
	constructor(props) {
		this.id = props.id;
		this.title = props.title;
		this.start = props.start;
		this.end = props.end;
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
		// bad heuristics...
		if(this.repeatCount > 1 && (this.range.end - currentTime) < 0.008){
			this.repeatCount -= 1;
			this.player.seekTo(this.range.start);
		}
	}
}

class DRRuleEngine {
	constructor(store, player) {	
		this.player = player;	
		this.store = store;
		this.fetchDataFromStore();
		this.run();
	}

	fetchDataFromStore() {
		this.ranges = this.store.getState().ranges.map(rangeData => new Range(rangeData));
		DRRuleEngine.getRangeById = createGetRangeById(this.ranges);
		this.rules = this.store.getState().rules.map(ruleData => createRule(ruleData, this.player));
	}

	run() {
		const currentTime = this.player.getCurrentTime();
		this.rules.map(rule=> rule.run(currentTime));
		this.store.dispatch({type: "CURRENT_TIME_CHANGED", payload: currentTime});
		window.requestAnimationFrame(this.run.bind(this));
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



export default DRRuleEngine;
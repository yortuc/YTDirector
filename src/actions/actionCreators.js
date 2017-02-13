import _ from "lodash";

const PLAYER_READY = "PLAYER_READY";
const PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED";
const SELECTED_OBJECT_CHANGED = "SELECTED_OBJECT_CHANGED";
const ADD_RULE_TO_RANGE = "ADD_RULE_TO_RANGE";

export function playerReady() {
	console.log("playerReady");
	return {
		type: PLAYER_READY
	}
}

export function playerStateChanged(playerState) {
	console.log("playerStateChanged", playerState);
	return {
 		type: PLAYER_STATE_CHANGED,
 		payload: playerState
	} 
}

export function selectedObjectChanged(object){
	console.log("selectedObjectChanged", object);
	return {
		type: SELECTED_OBJECT_CHANGED,
		payload: object
	}
}

export function addRuleToRange(rule, range) {
	console.log("addRuleToRange", rule, range);
	return {
		type: ADD_RULE_TO_RANGE,
		payload: { 
			rule, 
			range
		}
	}
}
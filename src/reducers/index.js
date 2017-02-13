const initialState = {
	points: [
		20.23, 40.5
	],
	ranges: [
		{ id: "rn_13_26", title: "Part #1", start: 1, end: 5 },
		{ id: "rn_14_16", title: "Part #2", start: 6, end: 8 },
		{ id: "rn_14_16", title: "Part #2", start: 60, end: 95 }
	],
	rules: [
		{id: "rl_0_rn_13_26", type: 0, repeatCount: 2, rangeId: "rn_13_26"},
		{id: "rl_0_rn_14_16", type: 0, repeatCount: 5, rangeId: "rn_14_16"}
	],
	videoId: "M7lc1UVf-VE",
	currentTime: 0,
	selectedObject: null
}

export function mainReducer(state=initialState, action){
	switch(action.type){
		case "SELECTED_OBJECT_CHANGED":
			const rules = state.rules.filter((rule)=> rule.rangeId === action.payload.id);
			const selectedObject = {...action.payload, ...{rules}};
			return {...state, ...{selectedObject}};

		case "ADD_RULE_TO_RANGE":
			return state;

		default:
			return state;
	}
}

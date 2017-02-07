export function mainReducer(state={}, action) {
	switch(action.type){
	case "play":
	case "stop":
	case ""
	}

	return {
		ranges: [
			{ id: "rn_13_26", title: "Part #1", start: 1, end: 5 },
			{ id: "rn_14_16", title: "Part #2", start: 14, end: 16 }
		],
		rules: [
			{id: "rl_0_rn_13_26", type: 0, repeatCount: 2, rangeId: "rn_13_26"},
			{id: "rl_0_rn_14_16", type: 0, repeatCount: 5, rangeId: "rn_14_16"}
		]
	}
}
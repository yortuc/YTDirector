import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'


function mainReducer(action={}) {
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

let store = createStore(mainReducer);

function render() {
	var appState = store.getState();
	console.log("appRender", appState);

	ReactDOM.render(
		<App state={appState} />,
		document.getElementById('root')
	);
}

store.subscribe(render);
render();
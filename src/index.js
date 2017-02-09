import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App';
import { mainReducer } from './Reducers';

/*
const rootReducer = combineReducers({
	video,
	data,
	selectedObject
});*/

const store = createStore(mainReducer);

store.subscribe(()=> console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
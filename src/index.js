import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import { mainReducer } from './reducers';
import RE from './components/DRRuleEngine';

const store = createStore(mainReducer);

ReactDOM.render(
	<Provider store={store}>
		<App onPlayerReady={(player)=> new RE(store, player)} />
	</Provider>,
	document.getElementById('root')
);
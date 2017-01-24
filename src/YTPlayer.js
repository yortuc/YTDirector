import React, { Component } from 'react';
import DRRuleEngine from './DRRuleEngine';

class YTPlayer extends Component {

	constructor(props) {
	  super(props);

	  this.player = null;
	  this.ruleEngine = null;
	}

	componentDidMount() {		

		// 2. This code loads the IFrame Player API code asynchronously.
		var tag = document.createElement('script');

		// insert iframe api script tag before the first script in document
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		tag.onload = function() {
			// 3. This function creates an <iframe> (and YouTube player)
			//    after the API code downloads.
			window.onYouTubeIframeAPIReady = function() {
				
				console.log("onYouTubeIframeAPIReady");

				this.player = new window.YT.Player('player', {
				  height: '390',
				  width: '640',
				  videoId: 'M7lc1UVf-VE',
				  playerVars: { 'autoplay': 0, 'controls': 1 },
				  events: {
				    'onReady': function(event) {
				    	var prp = { rules: this.props.rules, ranges: this.props.ranges };
				    	this.ruleEngine = new DRRuleEngine(prp, this.player);
				    	this.tick();
				    }.bind(this),
				  }
				});
			}.bind(this);
		}.bind(this);
	}
	
	tick() {
		this.ruleEngine.run(this.player.getCurrentTime());
		window.requestAnimationFrame(this.tick.bind(this));
	}

	onPlayerReady(event) {
		console.log("onPlayerReady", event);
	}

	render() {
		return <div id="player"></div>
	}

}

export default YTPlayer;
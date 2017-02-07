import React, { Component } from 'react';

class YTPlayer extends Component {

	constructor(props) {
		super(props);
		this.player = null;
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
				
				this.player = new window.YT.Player('player', {
				  height: '390',
				  width: '640',
				  videoId: this.props.videoId ,//'M7lc1UVf-VE',
				  playerVars: { 'autoplay': 0, 'controls': 1 },
				  events: {
				    onReady: (event) => this.props.onPlayerReady(),
				    onStateChange: (event)=> this.props.onStateChange(event.data /* player-state data */)
				  }
				});


			}.bind(this);
		}.bind(this);
	}

	render() {
		return <div id="player"></div>
	}

}

export default YTPlayer;
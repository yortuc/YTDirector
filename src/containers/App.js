import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playerReady, 
         playerStateChanged 
} from '../actions/actionCreators';

import YTPlayer from '../components/YTPlayer';
import DRTimeLine from '../components/DRTimeLine';
import DRRanges from '../components/DRRanges';
import DRRules from '../components/DRRules';


/*
  App -> container: mainState
    RuleEngine component (abstract component)

    (UI)
      Player
      TimeLine
      Rules/Ranges panel
*/

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <YTPlayer videoId={this.props.videoId} 
                  onPlayerReady={(event) => this.props.onPlayerReady()}
                  onStateChange={(playerState) => this.props.onStateChange(playerState)} />

        <DRTimeLine ranges={this.props.ranges} />
        <DRRanges ranges={this.props.ranges} />
        <DRRules rules={this.props.rules} />

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    ranges: state.main.ranges,
    rules: state.main.rules,
    videoId: state.main.videoId
  }
}

function mapDispatchToProps(dispatch){
  return {
    onPlayerReady: () => dispatch(playerReady()),
    onStateChange: (playerState) => dispatch(playerStateChanged(playerState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

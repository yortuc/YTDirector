import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playerReady, 
         playerStateChanged,
         selectedObjectChanged
} from '../actions/actionCreators';

import YTPlayer from '../components/YTPlayer';
import DRTimeLine from '../components/DRTimeLine';
import DRRanges from '../components/DRRanges';
import DRSelection from '../components/DRSelection';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <YTPlayer videoId={this.props.videoId} 
                  onPlayerReady={(event) => this.props.onPlayerReady()}
                  onStateChange={(playerState) => this.props.onStateChange(playerState)} />

        <DRTimeLine ranges={this.props.ranges} 
                    onRangeClick={(range) => this.props.onRangeClick(range)}/>

        <DRRanges selection={this.props.selectedObject}
                  ranges={this.props.ranges}
                  onRangeClick={(range) => this.props.onRangeClick(range)} />

        <DRSelection selection={this.props.selectedObject} />

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    ranges: state.ranges,
    rules: state.rules,
    videoId: state.videoId,
    selectedObject: state.selectedObject
  }
}

function mapDispatchToProps(dispatch){
  return {
    onPlayerReady: () => dispatch(playerReady()),
    onStateChange: (playerState) => dispatch(playerStateChanged(playerState)),
    onRangeClick: (object) => dispatch(selectedObjectChanged(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

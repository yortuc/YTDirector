import './App.css';
import React, { Component } from 'react';
import YTPlayer from './YTPlayer';
import DRTimeLine from './DRTimeLine';
import DRRanges from './DRRanges';
import DRRules from './DRRules';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <YTPlayer ranges={this.props.state.ranges} rules={this.props.state.rules}/>
        <DRTimeLine ranges={this.props.state.ranges} />

        <DRRanges ranges={this.props.state.ranges} />
        <DRRules rules={this.props.state.rules} />

      </div>
    );
  }
}

export default App;

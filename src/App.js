import React, { Component } from 'react';
import { IDS } from './constants';
import WithHorizontalScrolling from './hocs/WithHorizontalScrolling';
import WideView from './components/WideView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: IDS.SUMMARY,
      shift: 0,
    };
  }

  updateContent = id => this.setState({ currentContent: id });

  shiftView = (amount) => {
    this.setState({ shift: Math.max(0, this.state.shift + amount) })
  }

  render() {
    return (
      <WithHorizontalScrolling onPageMove={this.shiftView}>
        <WideView
          currentContent={this.state.currentContent}
          updateContent={this.updateContent}
          shift={this.state.shift}
        />
      </WithHorizontalScrolling>
    );
  }
}

export default App;

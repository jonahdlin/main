import React, { Component } from 'react';
import { IDS } from './constants';
import TabPanel from './components/TabPanel';
import { Summary, AboutMe, Projects, Resume } from './content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContent: IDS.SUMMARY
    };
  }

  renderContent() {
    switch(this.state.currentContent) {
      case IDS.ABOUTME:
        return <AboutMe />;
      case IDS.PROJECTS:
        return <Projects />;
      case IDS.RESUME:
        return <Resume />;
      case IDS.SUMMARY:
      default:
        return <Summary />;
    };
  }

  render() {
    return (
      <div className="App">
        <TabPanel
          selected={this.state.currentContent}
          handleTabClick={content => this.setState({currentContent: content})}
        />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;

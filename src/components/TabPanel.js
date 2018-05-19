import React, { Component } from 'react';
import styled from 'styled-components';
import { IDS } from '../constants';
import Tab from './Tab';

class TabPanel extends Component {
  renderTabs() {
    const tabIDs = [IDS.SUMMARY, IDS.ABOUTME, IDS.PROJECTS, IDS.RESUME];
    const tabClasses = ["summary-tab", "aboutme-tab", "projects-tab", "resume-tab"];
    const TEMPTabNames = ["S", "A", "P", "R"]

    let tabs = [];
    for (let i = 0; i < tabIDs.length; i++) {
      tabs.push(<Tab
        key={i}
        id={tabIDs[i]}
        className={tabClasses[i]}
        active={this.props.selected === tabIDs[i]}
        handleTabClick={() => this.props.handleTabClick(tabIDs[i])}
        text={TEMPTabNames[i]}
      />);
    }
    return tabs;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderTabs()}
      </div>
    );
  }
}

const TabPanelS = styled(TabPanel)`
  top: 10px;
  left: 10px;
  width: 212px;
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default TabPanelS;

import React, { Component } from 'react';
import styled from 'styled-components';
import { IDS, SEC_COLS, NAMES, ICONS } from '../constants';
import Tab from './Tab';
import background from '../resources/dust_scratches.png';

class TabPanel extends Component {
  renderTabs() {
    const tabIDs = [IDS.SUMMARY, IDS.ABOUTME, IDS.PROJECTS, IDS.RESUME];
    const tabClasses = ["summary-tab", "aboutme-tab", "projects-tab", "resume-tab"];

    let tabs = [];
    for (let i = 0; i < tabIDs.length; i++) {
      const id = tabIDs[i];
      tabs.push(<Tab
        key={i}
        id={id}
        className={tabClasses[i]}
        active={this.props.selected === id}
        handleTabClick={() => this.props.handleTabClick(id)}
        colour={SEC_COLS[id]}
        icon={ICONS[id]}
        title={NAMES[id]}
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
  padding: 10px;
  width: 212px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${background});
`;

export default TabPanelS;

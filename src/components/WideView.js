import React, { Component } from 'react';
import styled from 'styled-components';
import { IDS, NAMES, SEC_COLS } from '../constants';
import { Summary, AboutMe, Projects, Resume } from './content';
import ScrollAnimation from './ScrollAnimation/index';
import Header from '../atoms/Header';
import SectionHeader from '../atoms/SectionHeader';
import TabPanel from '../atoms/TabPanel';

class WideView extends Component {

  renderContent = () => {
    switch(this.props.currentContent) {
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

  handleTabClick = content => this.props.updateContent(content);

  render() {
    return (
      <div className={this.props.className}>
        <Header>
          <TabPanel
            selected={this.props.currentContent}
            handleTabClick={this.handleTabClick}
          />
          <SectionHeader
            bgColour={SEC_COLS[this.props.currentContent]}
          >{NAMES[this.props.currentContent]}</SectionHeader>
        </Header>
        {this.renderContent()}
        <ScrollAnimation progress={this.props.shift} />
      </div>
    );
  }
}

const WideViewS = styled(WideView)`
  width: 400%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(-${p => p.shift}px);
  transition: 0.5s ease-out;
`;

export default WideViewS;

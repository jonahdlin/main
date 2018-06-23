import React, { Component } from 'react';
import styled from 'styled-components';

import { NAMES, COLS, SEC_COLS } from '../constants';

class SectionHeader extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

const SectionHeaderS = styled(SectionHeader)`
  font-family: 'Nunito', sans-serif;
  ${p => p.align === "right" ? "right: 0" : "left: 0"};
  font-size: 35px;
  width: auto;
  height: 100%;
  flex-grow: 1;
  background-color: ${p => p.bgColour || 'transparent'};
  color: ${p => p.fontColour || COLS.BLACK};
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 10px;

  transition: 0.5s ease-out;
`;

export default SectionHeaderS;

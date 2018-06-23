import React, { Component } from 'react';
import styled from 'styled-components';
import { COLS } from '../../constants';

class Player extends Component {
  render() {
    return (
      <div className={this.props.className}>
      </div>
    );
  }
}

const PlayerS = styled(Player)`
  width: 15px;
  height: 40px;
  transform: translateX(-${p => p.translateX}px);
  background-color: ${COLS.BLUE};
`;

export default PlayerS;
import React, { Component } from 'react';
import styled from 'styled-components';
import { COLS } from '../../constants';

class Obstacle extends Component {
  render() {
    return (
      <div className={this.props.className}>
      </div>
    );
  }
}

const ObstacleS = styled(Obstacle)`
  width: 50px;
  height: 50px;
  background-color: ${COLS.BLACK};
`;

export default ObstacleS;
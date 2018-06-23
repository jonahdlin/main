import React, { Component } from 'react';
import styled from 'styled-components';
import { COLS } from '../../constants';
import Player from './Player';
import Obstacle from './Obstacle';
import FinishLine from './FinishLine';

class ScrollAnimation extends Component {
  renderObstacles = () => {
    return (
      <Obstacle />
    )
  }

  render() {
    return (
      <div className={this.props.className}>
        <Player translateX={this.props.shift} />
        {this.renderObstacles()}
        <FinishLine />
      </div>
    );
  }
}

const ScrollAnimationS = styled(ScrollAnimation)`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: ${COLS.LIGHT_GREY};
`;

export default ScrollAnimationS;

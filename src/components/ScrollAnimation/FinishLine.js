import React, { Component } from 'react';
import styled from 'styled-components';
import { COLS } from '../../constants';

class FinishLine extends Component {
  render() {
    return (
      <div className={this.props.className}>
      </div>
    );
  }
}

const FinishLineS = styled(FinishLine)`
  width: 30px;
  height: 100px;
  background-color: ${COLS.BLACK};
`;

export default FinishLineS;
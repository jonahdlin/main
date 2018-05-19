import React, { Component } from 'react';
import styled from 'styled-components';

class Summary extends Component {
  render() {
    return (
      <div className={this.props.className}>
        Summary
      </div>
    );
  }
}

const SummaryS = styled(Summary)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SummaryS;

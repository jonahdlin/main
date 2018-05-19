import React, { Component } from 'react';
import styled from 'styled-components';

class Resume extends Component {
  render() {
    return (
      <div className={this.props.className}>
        Resume
      </div>
    );
  }
}

const ResumeS = styled(Resume)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ResumeS;

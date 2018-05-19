import React, { Component } from 'react';
import styled from 'styled-components';

class Tab extends Component {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.handleTabClick}
      >
        <img src={this.props.iconSrc} alt={this.props.text || ""} />
      </div>
    );
  }
}

const TabS = styled(Tab)`
  width: 50px;
  height: 50px;
  background-color: ${p => p.active ? 'blue' : 'grey'};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export default TabS;

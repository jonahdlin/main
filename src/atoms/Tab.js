import React, { Component } from 'react';
import styled from 'styled-components';

import { COLS } from '../constants';

class Tab extends Component {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.handleTabClick}
        title={this.props.title}
      >
        <i className="material-icons tab-icon">{this.props.icon || 'help_outline'}</i>
      </div>
    );
  }
}

const TabS = styled(Tab)`
  width: 50px;
  height: 50px;
  background-color: ${p => p.active ? (p.colour || COLS.BLUE) : COLS.LIGHT_GREY};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  /* box-shadow: 7px 7px 15px -12px rgba(0,0,0,0.75); */
  border: 1px solid ${COLS.GREY};
  box-sizing: border-box;
  
  user-select: none;

  transition: 0.1s linear;

  :hover {
    cursor: pointer;
    /* box-shadow: 7px 7px 25px -12px rgba(0,0,0,0.75); */
  }

  .tab-icon {
    color: ${COLS.BLACK};
  }
`;

export default TabS;

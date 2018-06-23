import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

const HeaderS = styled(Header)`
  width: 100%;
  height: 70px;
  display: flex;
`;

export default HeaderS;

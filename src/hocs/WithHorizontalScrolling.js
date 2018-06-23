import React, { Component } from 'react';
import styled from 'styled-components';

class WithHorizontalScrolling extends Component {
  handleScroll = e => this.props.onPageMove(e.deltaY);

  render() {
    return (
      <div className={this.props.className} onWheel={this.handleScroll}>
        {this.props.children}
      </div>
    );
  }
}

const WithHorizontalScrollingS = styled(WithHorizontalScrolling)`
  width: auto;
  height: auto;
`;

export default WithHorizontalScrollingS;

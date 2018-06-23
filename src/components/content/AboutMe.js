import React, { Component } from 'react';
import styled from 'styled-components';

class AboutMe extends Component {
  render() {
    return (
      <div className={this.props.className}>
        About Me
      </div>
    );
  }
}

const AboutMeS = styled(AboutMe)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AboutMeS;

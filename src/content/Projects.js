import React, { Component } from 'react';
import styled from 'styled-components';

class Projects extends Component {
  render() {
    return (
      <div className={this.props.className}>
        Projects
      </div>
    );
  }
}

const ProjectsS = styled(Projects)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProjectsS;

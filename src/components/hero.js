import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from './theme.js';
import Heading from './heading.js';
import { Padding } from 'styled-components-spacing';

const StyledHeroContainer = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black};
`;

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <a id="top" />
        <StyledHeroContainer>
          <Padding horizontal={{ xs: 3, sm: 5, lg: 7 }}>
            <Heading color="white">The Sparks Will Melt Your Face Off </Heading>
          </Padding>
        </StyledHeroContainer>
      </React.Fragment>
    );
  }
}

export default Hero;

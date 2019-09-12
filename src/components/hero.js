import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from './theme.js';
import Heading from './heading.js';
import { Padding } from 'styled-components-spacing';

const StyledHeroContainer = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${theme.colors.black};
`;

const StyledTextContainer = styled.div`
  position: absolute;
  bottom: 32px;
  left: 24px;
`;

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <a id="top" />
        <StyledHeroContainer>
          <StyledTextContainer>
            <Heading size="small" color="white">
              The Sparks Will Melt Your Face Off{' '}
            </Heading>
          </StyledTextContainer>
        </StyledHeroContainer>
      </React.Fragment>
    );
  }
}

export default Hero;

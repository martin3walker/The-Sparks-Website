import React from 'react';
import styled from 'styled-components';
import { theme } from './theme.js';

const StyledLinkWrapper = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${theme.colors.textMid};
`;

class LinkWrapper extends React.Component {
  render() {
    return (
      <StyledLinkWrapper href={this.props.src} target="_blank" {...this.props}>
        {this.props.children}
      </StyledLinkWrapper>
    );
  }
}

export default LinkWrapper;

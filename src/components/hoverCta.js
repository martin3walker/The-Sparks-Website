import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Copy from './copy.js';
import LinkWrapper from './linkWrapper.js';
import { theme } from './theme.js';

const StyledHoverCta = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black};
  opacity: 0;
  transition: ${theme.animations.transitions.standard};
  &:after {
    content: '→';
    font-size: ${theme.type.fontSize.normal};
    margin-left: ${theme.spacing[4]};
  }
`;

const StyledCtaComponentContainer = styled.div`
  position: relative;
  a {
    width: 100%;
    z-index: ${theme.zindex2};
    transition: ${theme.animations.transitions.standard};
  }
  &:hover {
    a {
      opacity: 0;
    }
    ${StyledHoverCta} {
      opacity: 1;
    }
  }
`;

class HoverCta extends React.Component {
  render() {
    return (
      <StyledCtaComponentContainer {...this.props}>
        <StyledHoverCta>
          <Copy color={theme.colors.white} size="bigger">
            {this.props.cta}
          </Copy>
        </StyledHoverCta>
        <LinkWrapper href={this.props.href}>{this.props.children}</LinkWrapper>
      </StyledCtaComponentContainer>
    );
  }
}

HoverCta.propTypes = {
  cta: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

HoverCta.defaultProps = {};

export default HoverCta;

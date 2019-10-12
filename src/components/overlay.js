import React, { Component } from 'react';
import styled from 'styled-components';
import Copy from './copy.js';
import { Margin } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import { theme } from './theme.js';
import Close from '../images/close-24px.svg';
import breakpoint from 'styled-components-breakpoint';

const StyledOverlay = styled.div`
  width: 100%;
  height: ${props => (props.video ? '100vh' : '130px')};
  position: fixed;
  background: ${theme.colors.darkGray};
  left: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex
    ${props =>
      props.display
        ? `transform: translateY(0)`
        : `transform: translateY(100%)`};
  transition: ${theme.animations.transitions.standard};
  z-index: 10000;

  img {
    position: absolute;
    top: 0;
    right: 0;

    ${props =>
      props.video
        ? `margin: ${theme.spacing[7]};`
        : `margin: ${theme.spacing[4]};`};
    width: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  iframe {
    ${breakpoint('lg')`width: 560px;`}
    width: 300px;
  }
`;

class Overlay extends Component {
  render() {
    let iframeHeight = this.props.video ? '315' : '100';
    let autoplay = this.props.display ? 1 : 0;

    return (
      <StyledOverlay {...this.props}>
        <img src={Close} />
        <iframe
          height={iframeHeight}
          src={this.props.src}
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          title={this.props.title}
          autoplay={autoplay}
        />
      </StyledOverlay>
    );
  }
}

Overlay.propTypes = {
  src: PropTypes.string,
  display: PropTypes.bool,
  video: PropTypes.bool
};

Overlay.defaultProps = {
  video: true
};

export default Overlay;

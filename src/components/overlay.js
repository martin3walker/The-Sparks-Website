import React, { Component } from 'react';
import styled from 'styled-components';
import Copy from './copy.js';
import { Margin } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import { theme } from './theme.js';

const StyledOverlay = styled.div`
  width: 100%;
  height: ${props => (props.video ? '100vh' : '130px')};
  position: fixed;
  background: ${theme.colors.black};
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
`;

class Overlay extends Component {
  render() {
    let iframeHeight = this.props.video ? '315' : '100';
    let autoplay = this.props.display ? 1 : 0;

    return (
      <StyledOverlay {...this.props}>
        <iframe
          width="560"
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

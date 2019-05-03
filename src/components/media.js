import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LinkWrapper from './linkWrapper.js';
import Copy from './copy.js';
import { Margin } from 'styled-components-spacing';
import { theme } from './theme.js';

const StyledMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHoverCta = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black};
  opacity: 0;
  transition: ${theme.animations.transitions.standard};
  padding: ${theme.spacing[5]}
  &:after {
    content: '→';
    font-size: ${theme.type.fontSize.normal};
    margin-left: ${theme.spacing[4]};
    color: ${theme.colors.white};
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  &:hover {
    ${StyledHoverCta} {
      opacity: 1;
    }
  }
`;

const StyledMediaWrapper = styled.div``;

class Media extends React.Component {
  render() {
    return (
      <StyledMediaWrapper {...this.props}>
        <LinkWrapper href={this.props.url}>
          <StyledMedia>
            <StyledImageContainer>
              <StyledHoverCta>
                <Copy color={theme.colors.white}>{this.props.cta}</Copy>
              </StyledHoverCta>
              <img src={this.props.src} alt={this.props.title} />
            </StyledImageContainer>
            <Margin top={4}>
              <Copy textAlign="center" size="bigger">
                {this.props.title}
              </Copy>
            </Margin>
          </StyledMedia>
        </LinkWrapper>
      </StyledMediaWrapper>
    );
  }
}

Media.propTypes = {
  url: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  cta: PropTypes.string
};

export default Media;

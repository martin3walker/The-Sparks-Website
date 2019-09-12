import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from './theme.js';
import { Padding } from 'styled-components-spacing';

const StyledCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border: 1px solid ${theme.colors.gray};
  box-sizing: border-box;
  text-decoration: none;
  color: currentColor;
  transition: ${theme.animations.transitions.standard}
  &:hover {
    color: ${theme.colors.red};
    border-color: ${theme.colors.darkGray};
    cursor: pointer;
  }
`;

const StyledImageContainer = styled.div`
  display: block;
  overflow: hidden;
  border: none;
  height: 400px;
  position: relative;
  box-sizing: content-box;
  margin:auto;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: ${theme.animations.transitions.standard}
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class Card extends Component {
  render() {
    return (
      <StyledCardContainer {...this.props} href={this.props.href}>
        <StyledImageContainer href={this.props.href}>
          <img data-index={this.props.index} src={this.props.img} />
        </StyledImageContainer>
        <Padding all={{ xs: 2, lg: 3 }}>
          <StyledTextContainer>{this.props.children}</StyledTextContainer>
        </Padding>
      </StyledCardContainer>
    );
  }
}

Card.propTypes = {
  img: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired
};

export default Card;

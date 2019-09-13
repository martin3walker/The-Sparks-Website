import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from './theme.js';

const StyledHeading = styled.h1`
  font-family: ${theme.type.font.helvetica};

  ${props =>
    props.size && props.size === 'smaller'
      ? `font-size: ${theme.type.headingSize.small};`
      : null}
  ${props =>
    props.size && props.size === 'default'
      ? `font-size: ${theme.type.headingSize.default};`
      : null}
  ${props =>
    props.size && props.size === 'bigger'
      ? `font-size: ${theme.type.headingSize.bigger};`
      : null};

  color: ${props => (props.color ? props.color : `currentColor`)};
  font-weight: 300;
`;

class Heading extends React.Component {
  render() {
    return (
      <StyledHeading as={this.props.as} {...this.props}>
        {this.props.children}
      </StyledHeading>
    );
  }
}

Heading.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'normal', 'bigger']),
  color: PropTypes.string
};

Heading.defaultProps = {
  size: `${theme.type.headingSize.default}`
};

export default Heading;

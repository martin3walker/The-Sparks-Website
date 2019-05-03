import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from './theme.js';

const StyledHeading = styled.h1`
  font-family: ${theme.type.font.helvetica};
  font-size: 48px;
  color: ${props => (props.color ? props.color : `currentColor`)};
  text-align: center;
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
  size: `${theme.type.fontSize.default}`
};

export default Heading;

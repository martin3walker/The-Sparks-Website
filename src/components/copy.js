import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from './theme.js';

const StyledCopy = styled.div`
  font-family: ${theme.type.font.helvetica};

    ${props =>
      props.size && props.size === 'smaller'
        ? `font-size: ${theme.type.fontSize.small};`
        : null}
    ${props =>
      props.size && props.size === 'default'
        ? `font-size: ${theme.type.fontSize.default};`
        : null}
    ${props =>
      props.size && props.size === 'bigger'
        ? `font-size: ${theme.type.fontSize.bigger};`
        : null};

    ${props => props.textAlign && `text-align:${props.textAlign}`}

    color: ${props => (props.color ? props.color : `currentColor`)}
`;

class Copy extends React.Component {
  render() {
    return (
      <StyledCopy as={this.props.as} {...this.props}>
        {this.props.children}
      </StyledCopy>
    );
  }
}

Copy.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'normal', 'bigger']),
  as: PropTypes.string,
  color: PropTypes.string,
  textAlgin: PropTypes.string
};

Copy.defaultProps = {
  size: `${theme.type.fontSize.default}`,
  as: 'div'
};

export default Copy;

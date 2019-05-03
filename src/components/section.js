import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './heading.js';
import { Padding, Margin } from 'styled-components-spacing';

const StyledSection = styled.section`
  margin: auto;

  ${props => (!props.fullWidth ? `max-width: 1250px` : null)}
`;

class Section extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id={this.props.title.toLowerCase()} />
        <Padding top={100} bottom={100} left={4} right={4} {...this.props}>
          <StyledSection fullWidth={this.props.fullWidth}>
            <Margin bottom={60}>
              <Heading size="bigger">{this.props.title}</Heading>
            </Margin>
            {this.props.children}
          </StyledSection>
        </Padding>
      </React.Fragment>
    );
  }
}

Section.propTypes = {
  title: PropTypes.isRequired,
  fullWidth: PropTypes.bool
};

Section.defaultProps = {
  fullWidth: false
};

export default Section;

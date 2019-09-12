import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './heading.js';
import { Padding, Margin } from 'styled-components-spacing';
import { theme } from './theme.js';

const StyledSection = styled.section`
  margin: auto;
  position: relative;
  ${props => (!props.fullWidth ? `max-width: 1250px` : null)}

  h2 {
    border-bottom: 1px solid ${theme.colors.gray};
    margin-bottom: 20px;
  }
`;

class Section extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id={this.props.title.toLowerCase()} />
        <Padding top={50} bottom={50} left={4} right={4} {...this.props}>
          <StyledSection fullWidth={this.props.fullWidth}>
            <Margin horizontal={{ xs: 0, lg: 3 }}>
              <Heading as={'h2'} size="smaller">
                {this.props.title}
              </Heading>
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

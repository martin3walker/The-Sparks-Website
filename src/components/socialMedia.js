import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Padding } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import { theme } from './theme.js';

const StyledSocialMediaContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-start;

  ${props => (props.vertical ? `flex-direction: column` : null)}
`;

const StyledSocialMediaIcon = styled.li`
  height: 100%;
  img {
    width: 35px;
    transition: ${theme.animations.transitions.standard};
    fill: white;
    &:hover {
      transform: ${theme.animations.transforms.grow};
    }
  }
`;

class SocialMediaIcons extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SocialMediaQuery {
            allContentfulSocialMedia {
              edges {
                node {
                  name
                  icon {
                    file {
                      url
                    }
                  }
                  url
                }
              }
            }
          }
        `}
        render={data => (
          <StyledSocialMediaContainer {...this.props}>
            {data.allContentfulSocialMedia.edges.map(item => (
              <StyledSocialMediaIcon>
                <a href={item.node.url} target="blank_">
                  <Padding right={4}>
                    <img src={item.node.icon.file.url} alt={item.node.name} />
                  </Padding>
                </a>
              </StyledSocialMediaIcon>
            ))}
          </StyledSocialMediaContainer>
        )}
      />
    );
  }
}

SocialMediaIcons.propTypes = {
  vertical: PropTypes.bool
};

export default SocialMediaIcons;

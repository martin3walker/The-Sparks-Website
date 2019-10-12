import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from './theme.js';
import Heading from './heading.js';
import Copy from './copy.js';
import { Padding, Margin } from 'styled-components-spacing';
import SocialMediaIcons from './socialMedia.js';
import Grid from 'styled-components-grid';
import { StaticQuery, graphql } from 'gatsby';

const StyledFooterContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.colors.gray};
  max-width: 1250px;
  margin: auto;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: currentColor;
    display: inline-block;
  }

  ul {
    padding: 0px;
    margin: 0px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SocialMediaWrittenQuery {
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
          <Margin horizontal={{ xs: 0, lg: 3 }}>
            <StyledFooterContainer>
              <Padding top={6} bottom={9}>
                <Grid>
                  <Grid.Unit size={1 / 2}>
                    <ul>
                      {data.allContentfulSocialMedia.edges.map(item => (
                        <li>
                          <a href={item.node.url}>
                            <Copy>{item.node.name}</Copy>
                          </a>
                        </li>
                      ))}
                      <li>
                        <a href="mailto:jvstyle4@gmail.com">
                          <Copy>Email</Copy>
                        </a>
                      </li>
                    </ul>
                  </Grid.Unit>
                  <Grid.Unit size={1 / 2}>
                    <ul>
                      <li>
                        <a href="#shows">
                          <Copy>Shows</Copy>
                        </a>
                      </li>
                      <li>
                        <a href="#videos">
                          <Copy>Videos</Copy>
                        </a>
                      </li>
                      <li>
                        <a href="#music">
                          <Copy>Music</Copy>
                        </a>
                      </li>
                      <li>
                        <a href="#pictures">
                          <Copy>Pictures</Copy>
                        </a>
                      </li>
                    </ul>
                  </Grid.Unit>
                </Grid>
              </Padding>
            </StyledFooterContainer>
          </Margin>
        )}
      />
    );
  }
}

export default Footer;

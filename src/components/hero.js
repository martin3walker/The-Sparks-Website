import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from './theme.js';
import Heading from './heading.js';
import { Padding } from 'styled-components-spacing';
import { StaticQuery } from 'gatsby';

const StyledHeroContainer = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${theme.colors.black};
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.8;
  }
`;

const StyledTextContainer = styled.div`
  position: absolute;
  bottom: 32px;
  left: 24px;
`;

class Hero extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeroQuery {
            allContentfulHeroBanner {
              edges {
                node {
                  text
                  image {
                    fluid(maxWidth: 2000) {
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const heroBanner = data.allContentfulHeroBanner.edges[0].node;
          return (
            <React.Fragment>
              <a id="top" />
              <StyledHeroContainer>
                <img
                  src={heroBanner.image.fluid.src}
                  srcset={heroBanner.image.fluid.srcSet}
                  sizes={heroBanner.image.fluid.sizes}
                />
                <StyledTextContainer>
                  <Heading size="small" color="white">
                    {heroBanner.text}
                  </Heading>
                </StyledTextContainer>
              </StyledHeroContainer>
            </React.Fragment>
          );
        }}
      />
    );
  }
}

export default Hero;

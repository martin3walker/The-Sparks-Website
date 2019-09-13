import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledImageGrid = styled.div`
  column-count: 2;
  line-height: 0;
  column-gap: 0px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
`;

class Pictures extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query PicturesQuery {
            allContentfulPicture {
              edges {
                node {
                  description
                  picture {
                    fluid(maxWidth: 800) {
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
        render={data => (
          <StyledImageGrid>
            {data.allContentfulPicture.edges.map(item => {
              return (
                <StyledImageContainer>
                  <img
                    src={item.node.picture.fluid.src}
                    srcSet={item.node.picture.fluid.srcSet}
                    sizes={item.node.picture.fluid.sizes}
                    alt={item.node.description}
                  />
                </StyledImageContainer>
              );
            })}
          </StyledImageGrid>
        )}
      />
    );
  }
}

export default Pictures;

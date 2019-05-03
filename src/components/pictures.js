import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImageGrid = styled.div`
  column-count: 2;
  line-height: 0;
  column-gap: 0px;
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
                      ...GatsbyContentfulFluid
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
                <Img
                  fluid={item.node.picture.fluid}
                  alt={item.node.description}
                />
              );
            })}
          </StyledImageGrid>
        )}
      />
    );
  }
}

export default Pictures;

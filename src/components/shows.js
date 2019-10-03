import React from 'react';
import styled from 'styled-components';
import Copy from './copy.js';
import Card from './card.js';
import { StaticQuery, graphql } from 'gatsby';
import { Margin, Padding } from 'styled-components-spacing';
import { theme } from './theme.js';
import breakpoint from 'styled-components-breakpoint';
import Grid from 'styled-components-grid';

const StyledCopyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

class Shows extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ShowQuery {
            allContentfulShow {
              edges {
                node {
                  title
                  date
                  venueName
                  showUrl
                  coverImage {
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
        render={data => (
          <Grid>
            {data.allContentfulShow.edges.map(item => {
              return (
                <React.Fragment>
                  {new Date() < new Date(item.node.date) && (
                    <Grid.Unit size={1 / 1}>
                      <Margin
                        bottom={{ xs: 40, lg: 60 }}
                        horizontal={{ xs: 0, lg: 3 }}
                      >
                        <Card
                          href={item.node.showUrl}
                          src={item.node.coverImage.fluid.src}
                          srcset={item.node.coverImage.fluid.srcSet}
                          sizes={item.node.coverImage.fluid.sizes}
                          target="_blank"
                        >
                          <StyledCopyContainer>
                            <Margin bottom={2}>
                              <Copy>{item.node.title}</Copy>
                            </Margin>
                            <Margin bottom={2}>
                              <Copy>{item.node.venueName}</Copy>
                            </Margin>
                            <Copy>
                              {new Date(item.node.date).toDateString()}
                            </Copy>
                          </StyledCopyContainer>
                        </Card>
                      </Margin>
                    </Grid.Unit>
                  )}
                </React.Fragment>
              );
            })}
          </Grid>
        )}
      />
    );
  }
}

export default Shows;

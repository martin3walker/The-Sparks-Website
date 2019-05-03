import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Media from './media.js';
import Grid from 'styled-components-grid';
import { Margin } from 'styled-components-spacing';

class Music extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query MusicQuery {
            allContentfulMusic {
              edges {
                node {
                  title
                  url
                  cta
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Grid halign="justify">
            {data.allContentfulMusic.edges.map(item => {
              return (
                <Grid.Unit size={{ xs: 1 / 1, md: 8 / 17 }}>
                  <Margin bottom={{ xs: 40, md: 0 }}>
                    <Media
                      url={item.node.url}
                      src={item.node.image.file.url}
                      title={item.node.title}
                      cta={item.node.cta}
                    />
                  </Margin>
                </Grid.Unit>
              );
            })}
          </Grid>
        )}
      />
    );
  }
}

export default Music;

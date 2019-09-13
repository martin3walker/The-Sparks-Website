import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Card from './card.js';
import Copy from './copy.js';
import Overlay from './overlay.js';
import Grid from 'styled-components-grid';
import { Margin } from 'styled-components-spacing';

class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: Array(30).fill(false)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, index) {
    e.preventDefault();
    let currentIndex = this.state.display.findIndex(item => item === true);
    let newIndex = parseInt(e.target.dataset.index);
    let newDisplay;

    if (currentIndex === newIndex) {
      newDisplay = this.state.display.map(item => false);
    } else {
      newDisplay = this.state.display.map((item, i) => {
        return newIndex === i ? true : false;
      });
    }

    console.log(newDisplay);

    this.setState({
      display: newDisplay
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query VideoQuery {
            allContentfulVideo {
              edges {
                node {
                  title
                  url
                  coverImage {
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
          <Grid halign="justify">
            {data.allContentfulVideo.edges.map((item, i) => {
              return (
                <Grid.Unit size={{ xs: 1 / 1, lg: 1 / 2 }}>
                  <Margin
                    bottom={{ xs: 40, lg: 60 }}
                    horizontal={{ xs: 0, lg: 3 }}
                  >
                    <Overlay
                      src={item.node.url}
                      display={this.state.display[i]}
                      onClick={e => this.handleClick(e)}
                      title={this.props.title}
                    />
                    <Card
                      src={item.node.coverImage.fluid.src}
                      srcset={item.node.coverImage.fluid.srcSet}
                      sizes={item.node.coverImage.fluid.sizes}
                      onClick={e => this.handleClick(e)}
                      index={i}
                    >
                      <Copy>{item.node.title}</Copy>
                    </Card>
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

export default Videos;

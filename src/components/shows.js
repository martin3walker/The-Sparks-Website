import React from 'react';
import styled from 'styled-components';
import Copy from './copy.js';
import LinkWrapper from './linkWrapper.js';
import { StaticQuery, graphql } from 'gatsby';
import { Margin, Padding } from 'styled-components-spacing';
import { theme } from './theme.js';
import breakpoint from 'styled-components-breakpoint';

const StyledCopyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;

  ${breakpoint('md')`
   flex-direction: row;
   align-items: center;
 `}
`;

const StyledHoverCta = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black};
  opacity: 0;
  transition: ${theme.animations.transitions.standard};
  div&:after {
    content: '→';
    font-size: ${theme.type.fontSize.normal};
    color: white;
    margin-left: ${theme.spacing[4]};
  }
`;

const StyledShowsContainer = styled.div``;

const StyledShow = styled.div`
  /* max-width: 1000px; */
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 0.5px solid ${theme.colors.blackLight};
  a {
    width: 100%;
    z-index: ${theme.zindex2};
    transition: ${theme.animations.transitions.standard};
  }
  &:hover {
    a {
      opacity: 0;
    }
    ${StyledHoverCta} {
      opacity: 1;
    }
  }
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
                }
              }
            }
          }
        `}
        render={data => (
          <StyledShowsContainer>
            {data.allContentfulShow.edges.map(item => {
              return (
                <Margin bottom={6} top={6}>
                  <StyledShow>
                    <StyledHoverCta>
                      <Copy color={theme.colors.white} size="bigger">
                        Full Event Details
                      </Copy>
                    </StyledHoverCta>
                    <LinkWrapper href={item.node.showUrl} target="_blank">
                      <Padding horizontal={9} vertical={6}>
                        <StyledCopyContainer>
                          <Margin bottom={{ xs: 3, md: 0 }}>
                            <Copy size="bigger">{item.node.title}</Copy>
                          </Margin>
                          <Margin bottom={{ xs: 3, md: 0 }}>
                            <Copy size="bigger">{item.node.venueName}</Copy>
                          </Margin>
                          <Copy size="bigger">
                            {new Date(item.node.date).toDateString()}
                          </Copy>
                        </StyledCopyContainer>
                      </Padding>
                    </LinkWrapper>
                  </StyledShow>
                </Margin>
              );
            })}
          </StyledShowsContainer>
        )}
      />
    );
  }
}

export default Shows;

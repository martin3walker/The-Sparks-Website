import React from 'react';
import styled from 'styled-components';
import Copy from './copy.js';
import { theme } from './theme.js';
import SocialMediaIcons from './socialMedia.js';
import { Margin } from 'styled-components-spacing';
import PropTypes from 'prop-types';
import breakpoint from 'styled-components-breakpoint';
import Close from '../images/close-24px.svg';
import Open from '../images/menu-24px.svg';

const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  transition: ${theme.animations.transitions.standard};
  z-index: ${theme.zindex8};
  background-color: ${theme.colors.darkGray};
  ${breakpoint('lg')`
  padding-top: ${theme.spacing[60]};
  padding-right: ${theme.spacing[40]};
  `}
  padding-top: ${theme.spacing[30]};
  padding-right: ${theme.spacing[20]};
  ul {
    padding-left: ${theme.spacing[5]};
    padding-right: ${theme.spacing[5]};
  }

  ${props =>
    props.open
      ? `transform: ${theme.animations.transforms.normalHorizontal}`
      : `transform: ${theme.animations.transforms.fullAndHalfLeft};`}
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: ${theme.colors.white};
  padding-left: ${theme.spacing[3]};

  li {
    transition: ${theme.animations.transitions.standard};
    &:hover {
      transform: ${theme.animations.transforms.grow};
    }
  }

  a {
    text-decoration: none;
  }
`;

const StyledMenuButtonContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.zindex9};
  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.open &&
    `
      transform: ${theme.animations.transforms.normalHorizontal};
    `};
`;

const MenuButtonPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing[4]};
`;

const StyledMenuButton = styled.div`
  display: flex;
  img {
    width: 36px;
  }
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menuCta: Open
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let currentState = this.state.open;
    this.setState({ open: !currentState });

    let cta = currentState ? Open : Close;
    this.setState({ menuCta: cta });
  }

  render() {
    return (
      <React.Fragment>
        <StyledMenuButtonContainer
          open={this.state.open}
          onClick={e => this.handleClick(e)}
        >
          <MenuButtonPosition>
            <StyledMenuButton>
              <img src={this.state.menuCta} />
            </StyledMenuButton>
          </MenuButtonPosition>
        </StyledMenuButtonContainer>
        <StyledMenuContainer open={this.state.open} {...this.props}>
          <StyledMenu>
            <Margin bottom={5}>
              <li>
                <a href="#top" data-id="top" onClick={e => this.handleClick(e)}>
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    To the Top
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin bottom={5}>
              <li>
                <a
                  href="#shows"
                  data-id="shows"
                  onClick={e => this.handleClick(e)}
                >
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Shows
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin bottom={5}>
              <li>
                <a
                  href="#videos"
                  data-id="videos"
                  onClick={e => this.handleClick(e)}
                >
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Videos
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin bottom={5}>
              <li onClick={e => this.handleClick(e)}>
                <a href="#music" data-id="music">
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Music
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin>
              <li>
                <a
                  href="#pictures"
                  data-id="pictures"
                  onClick={e => this.handleClick(e)}
                >
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Pictures
                  </Copy>
                </a>
              </li>
            </Margin>
          </StyledMenu>
          <Margin top={30}>
            <SocialMediaIcons />
          </Margin>
        </StyledMenuContainer>
      </React.Fragment>
    );
  }
}

Menu.propTypes = {
  open: PropTypes.bool
};

StyledMenuButtonContainer.propTypes = {
  open: PropTypes.bool
};

export default Menu;

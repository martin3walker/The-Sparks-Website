import React from 'react';
import styled from 'styled-components';
import Copy from './copy.js';
import { theme } from './theme.js';
import SocialMediaIcons from './socialMedia.js';
import { Margin } from 'styled-components-spacing';
import PropTypes from 'prop-types';

const StyledMenuContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transition: ${theme.animations.transitions.standard};
  z-index: ${theme.zindex9};
  background-color: ${theme.colors.black};
  width: 40%;
  min-width: 250px;

  ul {
    padding-left: ${theme.spacing[3]};
    padding-right: ${theme.spacing[3]};
  }

  ${props =>
    props.open
      ? `transform: ${theme.animations.transforms.normalHorizontal}`
      : `transform: ${theme.animations.transforms.fullAndHalfLeft};`}
`;

const StyledFlyoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: ${theme.colors.white};
  height: 100vh;
  align-items: center;

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
  display: flex;
  justify-content: flex-start;
  width: 100%;
  transition: ${theme.animations.transitions.standard};
  transform: ${theme.animations.transforms.fullAndHalfRight};
  padding: ${theme.spacing[5]};
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
  background-color: ${theme.colors.black};
`;

const StyledMenuButton = styled.div`
  display: flex;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menuCta: 'Open'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let currentState = this.state.open;
    this.setState({ open: !currentState });
    let cta;
    currentState ? (cta = 'Open') : (cta = 'Close');
    this.setState({ menuCta: cta });
  }

  componentDidUpdate() {}

  render() {
    return (
      <StyledMenuContainer open={this.state.open} {...this.props}>
        <StyledMenuButtonContainer
          open={this.state.open}
          onClick={e => this.handleClick(e)}
        >
          <MenuButtonPosition>
            <StyledMenuButton>
              <Copy color={`${theme.colors.white}`} cta={this.state.menuCta}>
                {this.state.menuCta} Menu
              </Copy>
            </StyledMenuButton>
          </MenuButtonPosition>
        </StyledMenuButtonContainer>
        <StyledFlyoutContainer open={this.state.open}>
          <SocialMediaIcons />
          <StyledMenu>
            <Margin bottom={5}>
              <li>
                <a href="#top" data-id="top">
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    To the Top
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin bottom={5}>
              <li>
                <a href="#shows" data-id="shows">
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Shows
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin bottom={5}>
              <li>
                <a href="#videos" data-id="videos">
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Videos
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin bottom={5}>
              <li>
                <a href="#music" data-id="music">
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Music
                  </Copy>
                </a>
              </li>
            </Margin>
            <Margin bottom={5}>
              <li>
                <a href="#pictures" data-id="pictures">
                  <Copy size="bigger" color={`${theme.colors.white}`}>
                    Pictures
                  </Copy>
                </a>
              </li>
            </Margin>
          </StyledMenu>
        </StyledFlyoutContainer>
      </StyledMenuContainer>
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

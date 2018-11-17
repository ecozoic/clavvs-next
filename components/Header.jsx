import React from 'react';
import styled from 'styled-components';

import throttle from 'lodash.throttle';
import classnames from 'classnames';

import SocialLink from './SocialLink';

const SCROLL_THROTTLE_MS = 100;
const SCROLL_THRESHOLD_PX = 80;

const Nav = styled.nav`
  background-color: ${props =>
    props.transparent ? 'transparent' : props.theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.transparent ? 'transparent' : props.theme.colors.primary};
  transition: ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easing};
`;

const LogoHeader = styled.h1`
  display: none;
`;

const Logo = styled.img`
  max-height: ${props => props.theme.scale.biggest}rem !important;
`;

const Burger = styled.div`
  color: ${props =>
    props.transparent
      ? props.theme.colors.background
      : props.theme.colors.foreground};
  height: auto;
  transition: all ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easing};
  &:hover {
    color: ${props =>
      props.transparent
        ? props.theme.colors.foreground
        : props.theme.colors.primary};
  }
`;

const NavMenu = styled.div`
  box-shadow: none;
  @media screen and (max-width: 1087px) {
    &.is-active {
      background-color: ${props =>
        props.transparent ? 'transparent' : props.theme.colors.primary};
      display: inline-block;
      position: absolute;
      right: 0;
      & .navbar-item > a {
        color: ${props => props.theme.colors.background} !important;
        &:hover {
          color: ${props => props.theme.colors.foreground} !important;
        }
      }
    }
  }
`;

class Header extends React.Component {
  state = {
    scrollTop: 0,
    burgerOpen: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = throttle(() => {
    this.setState({
      scrollTop: window.scrollY,
    });
  }, SCROLL_THROTTLE_MS);

  handleBurgerClick = () => {
    this.setState(prevState => ({
      burgerOpen: !prevState.burgerOpen,
    }));
  };

  render() {
    const isTransparent = this.state.scrollTop <= SCROLL_THRESHOLD_PX;

    return (
      <Nav
        transparent={isTransparent}
        className="navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <Logo alt="logo" src="/static/logo.png" />
            <LogoHeader>CLAVVS</LogoHeader>
          </div>
          <Burger
            role="button"
            className={classnames('navbar-burger', {
              'is-active': this.state.burgerOpen,
            })}
            aria-label="menu"
            aria-expanded="false"
            transparent={isTransparent}
            active={this.state.burgerOpen}
            onClick={this.handleBurgerClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Burger>
        </div>
        <NavMenu
          className={classnames('navbar-menu', {
            'is-active': this.state.burgerOpen,
          })}
          transparent={isTransparent}
        >
          <div className="navbar-start" />
          <div className="navbar-end">
            {this.props.links.map(link => (
              <SocialLink
                key={link.id}
                link={link}
                transparent={isTransparent}
              />
            ))}
          </div>
        </NavMenu>
      </Nav>
    );
  }
}
export default Header;

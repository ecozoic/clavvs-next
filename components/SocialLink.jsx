import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const NavItem = styled.div`
  font-size: ${props => props.theme.scale.big}rem;

  & > a {
    color: ${props =>
      props.transparent
        ? props.theme.colors.blackTransparent
        : props.theme.colors.white};
    transition: all ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easing};

    &:hover {
      color: ${props =>
        props.transparent
          ? props.theme.colors.white
          : props.theme.colors.purple};
    }
  }
`;

const SocialLink = ({ link, transparent }) => (
  <NavItem className="navbar-item" transparent={transparent}>
    <a href={link.href}>
      <FontAwesomeIcon fixedWidth icon={link.icon} />
    </a>
  </NavItem>
);

export default SocialLink;

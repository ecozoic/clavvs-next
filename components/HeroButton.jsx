import React from 'react';
import styled from 'styled-components';

const ButtonLink = styled.a`
  background-color: transparent;
  border: 4px solid ${props => props.theme.colors.foregroundTransparent};
  color: ${props => props.theme.colors.foregroundTransparent};
  display: inline-block;
  font-size: ${props => props.theme.scale.bigger}rem;
  font-weight: ${props => props.theme.font.weights.bold};
  padding: ${props => props.theme.scale.normal}rem;
  text-align: center;
  text-transform: uppercase;
  transition: all ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easing};
  user-select: none;
  &:hover {
    background-color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
  &:active {
    background-color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

const HeroButton = ({ link }) => (
  <ButtonLink href={link.href}>{link.text}</ButtonLink>
);

export default HeroButton;

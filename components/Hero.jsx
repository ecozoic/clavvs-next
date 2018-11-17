import React from 'react';
import styled from 'styled-components';

import HeroButton from './HeroButton';

const HeroImage = styled.section`
  background: url(${props => props.theme.backgroundImage}) no-repeat center /
    cover;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    background-position-x: 75%;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    background-position-x: 60%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    margin: ${props => props.theme.scale.bigger}rem;
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      margin: ${props => props.theme.scale.smallest}rem;
      padding: ${props => props.theme.scale.smallest}rem;
    }
  }
`;

const Hero = ({ links }) => (
  <HeroImage className="hero is-fullheight">
    <div className="hero-head" />
    <div className="hero-body" />
    <div className="hero-foot">
      <ButtonContainer className="container">
        {links.map(link => (
          <HeroButton key={link.id} link={link} />
        ))}
      </ButtonContainer>
    </div>
  </HeroImage>
);

export default Hero;

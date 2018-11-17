import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FirebaseContext from '../../lib/firebase-context';

const SocialsContainer = styled.div`
  padding-bottom: ${props => props.theme.scale.biggest}rem;
  padding-top: ${props => props.theme.scale.huge}rem;
`;

const SocialLink = styled.div`
  font-size: ${props => props.theme.scale.biggest}rem;
  text-align: center;
  & > a {
    color: ${props => props.theme.colors.foreground};
    transition: color ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easing};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Socials = () => (
  <FirebaseContext.Consumer>
    {({ socialLinks }) => (
      <SocialsContainer>
        <div className="columns is-mobile is-multiline">
          {socialLinks.map(socialLink => (
            <SocialLink className="column" key={socialLink.id}>
              <a href={socialLink.href}>
                <FontAwesomeIcon fixedWidth icon={socialLink.icon} />
              </a>
            </SocialLink>
          ))}
        </div>
      </SocialsContainer>
    )}
  </FirebaseContext.Consumer>
);

export default Socials;

import React from 'react';
import styled from 'styled-components';

const FooterListHeader = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.scale.small}rem;
`;

const FooterListContent = styled.p`
  color: ${props => props.theme.colors.foreground};
`;

const FooterListLink = styled.a`
  color: ${props => props.theme.colors.foreground};
  transition: color ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easing};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterItem = ({ link }) => (
  <div className="column">
    <FooterListHeader>{link.header}</FooterListHeader>
    <FooterListContent>
      <FooterListLink href={link.href}>{link.text}</FooterListLink>
    </FooterListContent>
  </div>
);

export default FooterItem;

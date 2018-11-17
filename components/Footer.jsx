import React from 'react';
import styled from 'styled-components';

import FooterItem from './FooterItem';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding-bottom: 3rem;
`;

const Footer = ({ links }) => (
  <StyledFooter className="footer">
    <div className="container">
      <div className="columns">
        {links.map(link => (
          <FooterItem key={link.id} link={link} />
        ))}
      </div>
    </div>
  </StyledFooter>
);

export default Footer;

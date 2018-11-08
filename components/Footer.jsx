import React from 'react';
import styled from 'styled-components';

// import FooterItem from './FooterItem';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.black};
  border-top: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.gray};
  padding-bottom: 3rem;
`;

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter className="footer">
        <div className="container">
          <div className="columns">
            {/*this.props.store.footer.sortedLinks.map(link => (
              <FooterItem key={link.id} link={link} />
            ))*/}
          </div>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;

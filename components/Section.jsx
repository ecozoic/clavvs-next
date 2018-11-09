import React from 'react';
import styled from 'styled-components';

// import Contents from './Contents';

const SectionHeader = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.scale.biggest}rem;
  margin-bottom: ${props => props.theme.scale.biggest}rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  text-align: center;
`;

const Section = ({ section }) => (
  <section className="section">
    <div className="container">
      <SectionHeader>{section.header}</SectionHeader>
      {/*<Contents contents={this.props.section.contents} />*/}
    </div>
  </section>
);

export default Section;

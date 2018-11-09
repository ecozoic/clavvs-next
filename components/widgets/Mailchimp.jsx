import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.purple} !important;
  color: ${props => props.theme.colors.white} !important;
`;

const Input = styled.input`
  &:focus {
    border-color: ${props => props.theme.colors.purple};
    box-shadow: 0 0 0 0.125em ${props => props.theme.colors.purpleTransparent};
  }
`;

const InputField = styled.div`
  margin-bottom: ${props => props.theme.scale.big}rem !important;
`;

const Header = styled.h2`
  font-size: ${props => props.theme.scale.big}rem;
  margin-bottom: ${props => props.theme.scale.big}rem;
`;

const Mailchimp = props => (
  <form action={props.action} method="post" target="_blank" noValidate>
    <Header>{props.header}</Header>
    <InputField className="field">
      <p className="control has-icons-left">
        <Input
          id="email"
          name="EMAIL"
          type="email"
          className="input is-medium"
          placeholder="Email"
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
        <input
          type="hidden"
          name="b_6b3bedaf97619356c511dddb9_e1016c7f40"
          tabIndex="-1"
          value=""
        />
      </p>
    </InputField>
    <div className="field">
      <div className="control">
        <Button className="button is-link is-medium" type="submit">
          Subscribe
        </Button>
      </div>
    </div>
  </form>
);

export default Mailchimp;

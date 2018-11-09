import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    background-color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.font.rootSize};
  }
  body {
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.font.family};
    font-weight: ${props => props.theme.font.weights.regular};
    line-height: ${props => props.theme.font.lineHeight};
  }
`;

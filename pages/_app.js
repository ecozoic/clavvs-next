import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import theme from '../lib/theme';
import { initGA, logPageView } from '../lib/analytics';
import withFirebaseStore from '../lib/with-firebase-store';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    initGA();
    logPageView();
    Router.router.events.on('routeChangeComplete', logPageView);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default withFirebaseStore(MyApp);

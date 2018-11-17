import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { config } from '@fortawesome/fontawesome-svg-core';

import createTheme from '../lib/create-theme';
import { initGA, logPageView } from '../lib/analytics';
import withFirebaseStore, {
  getOrCreateStore,
} from '../lib/with-firebase-store';
import mapDocToObject from '../lib/map-doc-to-object';

import GlobalStyle from '../components/GlobalStyle';

// tell font-awesome not to add css when icons are requested
// b/c we are pre-rendering that CSS on the server in _document.js
config.autoAddCss = false;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const db = getOrCreateStore();
    const themesSnapshot = db
      .collection('themes')
      .where('enabled', '==', true)
      .get();
    const theme = createTheme(
      (await themesSnapshot).docs.map(mapDocToObject)[0],
    );

    return { pageProps, theme };
  }

  componentDidMount() {
    initGA();
    logPageView();
    // TODO: this line sometimes causes client to crash b/c it runs multiple times
    // Router.router.events.on('routeChangeComplete', logPageView);
  }

  render() {
    const { Component, pageProps, theme } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withFirebaseStore(MyApp);

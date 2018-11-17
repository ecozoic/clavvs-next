import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core';

import { getOrCreateStore } from '../lib/with-firebase-store';
import mapDocToObject from '../lib/map-doc-to-object';
import createTheme from '../lib/create-theme';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    const db = getOrCreateStore();
    const themesSnapshot = db
      .collection('themes')
      .where('enabled', '==', true)
      .get();
    const theme = createTheme(
      (await themesSnapshot).docs.map(mapDocToObject)[0],
    );

    return { ...page, styleTags, theme };
  }

  render() {
    const title = 'CLAVVS';
    const description = 'hypnotic alt pop // spectral trip hop';
    const image = this.props.theme.backgroundImage;

    return (
      <html lang="en">
        <Head>
          {/* meta */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={description} />

          {/* favicon */}
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />

          {/* twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@clavvsduo" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />

          {/* facebook open graph */}
          <meta property="og:url" content="https://clavvs.com" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          {/* fonts + css */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
            rel="stylesheet"
          />

          {/* font-awesome */}
          <style>{dom.css()}</style>

          {/* styled-components */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* songkick */}
          <script src="https://widget.songkick.com/widget.js" />
        </body>
      </html>
    );
  }
}

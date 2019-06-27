import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core';

import { DESCRIPTION } from '../lib/constants';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const documentProps = ctx.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...documentProps, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* meta */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={DESCRIPTION} />

          {/* g-suite */}
          <meta
            name="google-site-verification"
            content="spEqvStdWwbQvTSi330gKnU41sAo1nOvpvHGnmfdVuA"
          />

          {/* favicon */}
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />

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

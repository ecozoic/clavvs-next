import React from 'react';

import { TITLE, DESCRIPTION } from '../lib/constants';

const FacebookOpenGraph = ({ url, title, description, image }) => (
  <>
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </>
);

FacebookOpenGraph.defaultProps = {
  url: process.env.PUBLIC_URL,
  title: TITLE,
  description: DESCRIPTION,
};

export default FacebookOpenGraph;

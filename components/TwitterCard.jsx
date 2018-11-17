import React from 'react';

import { TITLE, DESCRIPTION, TWITTER } from '../lib/constants';

const TwitterCard = ({ card, site, title, description, image }) => (
  <>
    <meta name="twitter:card" content={card} />
    <meta name="twitter:site" content={site} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </>
);

TwitterCard.defaultProps = {
  card: 'summary_large_image',
  site: TWITTER,
  title: TITLE,
  description: DESCRIPTION,
};

export default TwitterCard;

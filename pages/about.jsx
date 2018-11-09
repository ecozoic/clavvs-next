import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <>
    <h1>About</h1>
    <Link href="/">
      <a>Go back</a>
    </Link>
    <FontAwesomeIcon icon={['fab', 'google']} />
  </>
);

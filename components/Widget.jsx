import React from 'react';

import Mailchimp from './widgets/Mailchimp';
import Socials from './widgets/Socials';
import Songkick from './widgets/Songkick';
import Soundcloud from './widgets/Soundcloud';
import SpotifyFollow from './widgets/SpotifyFollow';
import SpotifyPlayer from './widgets/SpotifyPlayer';

const Widget = ({ name, props }) => {
  let widget = null;

  switch (name) {
    case 'mailchimp':
      widget = Mailchimp;
      break;
    case 'songkick':
      widget = Songkick;
      break;
    case 'soundcloud':
      widget = Soundcloud;
      break;
    case 'spotify-follow':
      widget = SpotifyFollow;
      break;
    case 'spotify-player':
      widget = SpotifyPlayer;
      break;
    case 'socials':
      widget = Socials;
      break;
    default:
      widget = null;
  }

  if (widget === null) {
    return null;
  }

  return React.createElement(widget, props);
};

export default Widget;

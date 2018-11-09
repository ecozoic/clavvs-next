import React from 'react';

const SpotifyFollow = props => (
  <iframe
    title="Spotify Follow"
    src={`https://open.spotify.com/follow/1?uri=spotify:artist:${
      props.artist
    }&size=${props.size}&theme=${props.theme}`}
    width="300"
    height="56"
    scrolling="no"
    frameBorder="0"
    style={{
      border: 'none',
      overflow: 'hidden',
      backgroundColor: 'transparent',
    }}
  />
);

export default SpotifyFollow;

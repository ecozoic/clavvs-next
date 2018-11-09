import React from 'react';

const SpotifyPlayer = props => (
  <iframe
    style={{ width: '100%', backgroundColor: 'transparent' }}
    title="Spotify Player"
    src={`https://open.spotify.com/embed?uri=spotify:artist:${props.artist}`}
    width="300"
    height="380"
    frameBorder="0"
    allow="encrypted-media"
  />
);

export default SpotifyPlayer;

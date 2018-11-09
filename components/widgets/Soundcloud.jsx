import React from 'react';

const Soundcloud = ({ user }) => (
  <iframe
    title="Soundcloud"
    width="100%"
    height="450"
    scrolling="no"
    frameBorder="no"
    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${user}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`}
  />
);

export default Soundcloud;

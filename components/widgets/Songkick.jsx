import React from 'react';

import pollFor from '../../lib/poll-for';

class Songkick extends React.Component {
  componentDidMount() {
    this.unsubscribe = pollFor(
      () => window.SongkickWidget && window.SongkickWidget.Injector,
      () => {
        const widget = new window.SongkickWidget.Injector();
        widget.loadIFrame();
      },
      250,
    );
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <a
        href={`http://www.songkick.com/artists/${this.props.artist}`}
        className="songkick-widget"
        data-theme="dark"
        data-track-button="on"
        data-detect-style="true"
        data-font-color="#ffffff"
        data-background-color="transparent"
      >
        {this.props.text}
      </a>
    );
  }
}

export default Songkick;

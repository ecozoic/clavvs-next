import React from 'react';

class Songkick extends React.Component {
  componentDidMount() {
    const widget = new window.SongkickWidget.Injector();
    widget.loadIFrame();
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

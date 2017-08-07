import React from 'react';

class Player extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: null,
      playing: false
    };
  }

  play(){
   // "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd";

    this.refs.video.play();
  }

  pause(){
    this.refs.video.pause();
  }

  render() {
    return (
      <video src={this.state.url} ref="video" muted>
      </video>
    );
  }
}

export default Player;

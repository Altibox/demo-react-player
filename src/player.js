import React from 'react';

class Player extends React.Component {

  componentDidMount(){
    console.log("Player did mount");
    this.playerPropped(this.props);
  }

  componentWillReceiveProps(nextProps){
    console.log("Player did recieve props");
    this.playerPropped(nextProps);
  }    

  playerPropped(nextProps){
    if(nextProps.playing && this.props.url){
      console.log("Player is playing...");
      this.refs.video.play();
    }
    else{
      console.log("Player is pausing...");
      this.refs.video.pause();
    }
  }
  
  render() {
    console.log("Rendering player...");
    
    const style = {
      backgroundColor: 'red'
    };

    return (
      <video style={style} src={this.props.url} poster={this.props.posterUrl} ref="video" muted>
      </video>
    );
  }
}

export default Player;

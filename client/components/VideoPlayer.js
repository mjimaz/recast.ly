var VideoPlayer = (props) => {

if(props.video) {
  return (<div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" type="text/html" src={`https://www.youtube.com/embed/${props.video.id.videoId}?autoplay=${props.autop ? 1 : 0}&allowFullScreen`}></iframe>
    }
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
  </div>)
} else {
  return <h2>Loading</h2>
}

}

window.VideoPlayer = VideoPlayer;

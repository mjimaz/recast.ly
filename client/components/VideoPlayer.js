var VideoPlayer = ({video}) => {

if(video) {
  return (<div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1 allowFullScreen`}></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>)
} else {
  return <h2>Loading</h2>
}

}

window.VideoPlayer = VideoPlayer;

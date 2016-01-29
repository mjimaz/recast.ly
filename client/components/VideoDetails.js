var VideoDetails = ({video}) => {

if(video) {
  return (<div className="video-details">
      <h3>Channel Title: {video.snippet.channelTitle}</h3>
      <h3>Description: {video.snippet.description}</h3>
      <h3>Published At: {video.snippet.publishedAt}</h3>
  </div>)
} else {
  return <div></div>
}

}

window.VideoDetails = VideoDetails;

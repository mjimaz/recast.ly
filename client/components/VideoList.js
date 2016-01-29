var VideoList = ({videos}) => (

  <div className="video-list media">
  {videos.map((video) => 
    <VideoListEntry video={video} key={video.etag} />
    )}
  </div>
);

window.VideoList = VideoList;

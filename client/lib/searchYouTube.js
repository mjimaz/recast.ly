var searchYouTube = (options, callback) => {
  // TODO

  var searchText = $('.form-control').val();

  $.get('https://www.googleapis.com/youtube/v3/search', {
  // This is the url you should use to communicate with the parse API server.
  
    part: 'snippet',
    key: window.YOUTUBE_API_KEY,
    maxResults: 10,
    q: searchText,
    type: 'video',
    videoEmbeddable: 'true'
  }).done((data) => {
    if(callback){
      callback(data);
    }
  }).fail((data) => {
    console.error('Recast.ly: Failed to receive videos!',data);
    }
  );

};

window.searchYouTube = searchYouTube;

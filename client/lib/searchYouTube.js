var searchYouTube = (options, callback) => {
  // TODO

  var searchText = $('.form-control').val();

  $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q='+searchText+'&fields=etag%2CeventId%2Citems%2Ckind%2CnextPageToken%2CpageInfo%2CprevPageToken%2CtokenPagination%2CvisitorId&key='+window.YOUTUBE_API_KEY,
  type: 'GET',
  success: function (data) {
    if(callback){
      callback(data);
    }

  },
  error: function (data) {
    console.error('Recast.ly: Failed to receive videos!',data);
  }

});

};

window.searchYouTube = searchYouTube;

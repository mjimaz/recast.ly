class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyPlaying: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  handleClick(event){
   var videoName = event.target.innerHTML;
   for(var i = 0 ; i < this.state.videoList.length ; i++){
    if(this.state.videoList[i].snippet.title === videoName){
      this.setState({currentlyPlaying : this.state.videoList[i]});
    }
   }

  }

  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video = {this.state.currentlyPlaying} />
      </div>
      <div className="col-md-5" onClick = {this.handleClick.bind(this)}>
        <VideoList videos = {this.state.videoList} />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

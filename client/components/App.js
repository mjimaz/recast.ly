class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyPlaying: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }
  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video = {this.state.currentlyPlaying} />
      </div>
      <div className="col-md-5">
        <VideoList videos = {this.state.videoList} />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

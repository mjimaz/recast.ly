class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyPlaying: null,
      videoList: [],
      autoplay: false
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

  setStates(data) {
    this.setState({currentlyPlaying : data.items[0]});
    this.setState({videoList : data.items});
  }

  autoplay(){
    this.setState({autoplay: !this.state.autoplay});
  }

  render() {
    return (<div>
      <Nav videoList = {this.state}
      setStates = {this.setStates.bind(this)}/>
      <div>Autoplay: <input type="checkbox" name="autoplay" value="false" onChange = {this.autoplay.bind(this)}/></div>
      <div className="col-md-7">
        <VideoPlayer video = {this.state.currentlyPlaying} autop={this.state.autoplay} />
        <VideoDetails video = {this.state.currentlyPlaying} />
      </div>
      <div className="col-md-5" onClick = {this.handleClick.bind(this)}>
        <VideoList videos = {this.state.videoList} />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

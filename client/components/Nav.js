class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

  return (<nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
    {console.log('nav:', this.props.videoList.videoList)}
      <Search videoList = {this.props.videoList}/>
    </div>
  </nav>)
  }
};

window.Nav = Nav;

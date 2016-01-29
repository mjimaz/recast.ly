class Search extends React.Component {


  constructor(props) {
    super(props);
    this.method = _.debounce(this.searchMethod,400);

  }

  searchMethod(){
    searchYouTube(null, this.props.setStates);
  }
 
  render() {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" onChange = {this.method.bind(this)}/>
      <button className="btn hidden-sm-down" onClick = {() => searchYouTube(null, this.props.setStates)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  )}
};


window.Search = Search;

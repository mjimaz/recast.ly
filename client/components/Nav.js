var Nav = ({videoList, setStates}) => ( 
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search videoList = {videoList}
      setStates = {setStates}/>
    </div>
  </nav>
);

window.Nav = Nav;

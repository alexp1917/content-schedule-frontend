import React from 'react';

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  useLocation,
  // useParams
} from "react-router-dom";

function ListItem(options) {
  var {
    name,
    link,
  } = options;

  // var item = function Li(props) {
  var { pathname } = useLocation();
  var active = pathname === link;
  return <li className={"nav-item" + (active ? ' active' : '')}>
    <Link className="nav-link" to="/a">
      {name}
      {active ? <span className="sr-only">(current)</span> : null}
    </Link>
  </li>
  // };

  // // consider this, seems very dumb.
  // return React.memo(item, BiFunction<Prop, Prop, Boolean>);
  // return item;
}


function Nav() {
  var location = useLocation();
  var url = location.pathname;
  return <nav className="navbar navbar-dark navbar-expand-md bg-dark">
    <Link className="navbar-brand" to="/">Content</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample01">
      <ul className="navbar-nav mr-auto">
        <ListItem name='Home' link='/' />
        <ListItem name='Quotes' link='/quotes' />
        <ListItem name='Tweets' link='/tweets' />
        <li className={"nav-item dropdown" + (url === '/dropdown' ? ' active' : '')}>
          <Link to="/" className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
          <div className="dropdown-menu" aria-labelledby="dropdown01">
            <Link className="dropdown-item" to="/">Action</Link>
            <Link className="dropdown-item" to="/">Another action</Link>
            <Link className="dropdown-item" to="/">Something else here</Link>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-md-0">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" defaultValue={JSON.stringify(location)} />
      </form>
    </div>
  </nav>
}

export default Nav;

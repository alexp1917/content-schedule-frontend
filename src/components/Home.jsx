import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function Home() {
  return <div className="container mt-3">
    <div className="row">
      <div className="col-md-3">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/active" className="nav-link active">Active</Link>
          </li>
          <li className="nav-item">
            <Link to="/link" className="nav-link">Link</Link>
          </li>
          <li className="nav-item">
            <Link to="/another" className="nav-link">Another link</Link>
          </li>
          <li className="nav-item">
            <Link to="/disabled" className="nav-link disabled">Disabled</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-9">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Hello</h4>
            <h6 className="card-subtitle mb-2 text-muted">world</h6>
            <p className="card-text">text</p>
            <Link to="/card" className="card-link">Card link</Link>
            <Link to="/another" className="card-link">Another link</Link>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Home;

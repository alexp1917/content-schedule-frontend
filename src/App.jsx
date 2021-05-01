// import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return <Router>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <p>About</p>
        {/*<About />*/}
      </Route>
      <Route path="/dashboard">
        <p>Dashboard</p>
      </Route>
      <Route path="*">
        <p>
          Maybe go <Link to="/">Home</Link>?
        </p>
      </Route>
    </Switch>
  </Router>;
}

export default App;

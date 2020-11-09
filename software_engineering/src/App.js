import AddSession from './components/AddSession';
import ListSession from './components/ListSession';
import ViewSession from './components/ViewSession';
import {Nav, Navbar} from 'react-bootstrap';
import './assets/css/App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">Software Engineering</Navbar.Brand>
        <Nav className="justify-content-end">
            <div id="L1"><Link to="/ListSession">Session List</Link></div>
            <Link to="/AddSession">Add Session  </Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/ListSession" component= {ListSession} />
        <Route path="/AddSession" component= {AddSession} />
        <Route path="/ViewSession" component= {ViewSession} />
      </Switch>
    </div>
  );
}

export default App;

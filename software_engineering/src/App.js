import AddSession from './components/AddSession';
import ListSession from './components/ListSession';
import './components/ViewSession';
import './assets/css/App.css';
import {Nav, Navbar} from 'react-bootstrap';
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
      <Navbar bg="dark" variant="light">
        <Navbar.Brand href="">Software Engineering</Navbar.Brand>
        <Nav className="justify-content-end">
            <Link to="/ListSession">Session List</Link>
            <Link to="/AddSession">Add Session</Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/ListSession" component= {ListSession} />
        <Route path="/AddSession" component= {AddSession} />
      </Switch>
    </div>
  );
}

export default App;

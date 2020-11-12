import AddSession from './components/AddSession';
import ListSession from './components/ListSession';
import ViewSession from './components/ViewSession';
import SpeakerList from './components/SpeakerList';
import AddSpeaker from './components/AddSpeaker';
import ViewSpeaker from './components/ViewSpeaker';
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
        <Navbar.Brand href="/">Software Engineering</Navbar.Brand>
        <Nav className="justify-content-end">
            <div id="L1"><Link to="/ListSession">Session List</Link></div>
            <Link to="/SpeakerList">SpeakerList&nbsp;&nbsp;</Link>
            <Link to="/AddSession">Add Session&nbsp;&nbsp;</Link>
            <Link to="/AddSpeaker">Add Speaker&nbsp;&nbsp;</Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/ListSession" component= {ListSession} />
        <Route path="/AddSession" component= {AddSession} />
        <Route path="/ViewSession" component= {ViewSession} />
        <Route path="/SpeakerList" component= {SpeakerList} />
        <Route path="/AddSpeaker" component= {AddSpeaker} />
        <Route path="/ViewSpeaker" component= {ViewSpeaker} />
      </Switch>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from "axios";
export default class ListSession extends Component {

  state = {
    sessions: [],
    currentIndex: -1
  }

  componentDidMount() {
    axios.get("http://localhost:3001/sessions")
      .then(res => {
        const sessions = res.data;
        this.setState({ sessions });
      })
  }

  render(){
    return(
      <div>
        <div id='session-list'><h1 className="text-center">Session List</h1></div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Speaker</th>
              <th>Session Name</th>
              <th>Room Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sessions.map((session) =>
              <tr>
                <td>{session.session_name}</td>
                <td>{session.Speaker_name}</td>
                <td>{session.Room_name}</td>
                <td>{session.Start} - {session.End}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }

}

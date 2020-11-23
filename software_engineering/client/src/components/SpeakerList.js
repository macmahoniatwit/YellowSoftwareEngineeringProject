import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
export default class SpeakerList extends Component {
  state = {
    speakers: [],
    currentIndex: -1
  }

  componentDidMount() {
    axios.get("http://localhost:3001/SpeakerList")
      .then(res => {
        const speakers = res.data;
        this.setState({ speakers });
      })
  }
  /*
  <div id='speaker-list'><h1 className="text-center">Speaker List</h1></div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name of the Speaker</th>
              <th>Email</th>
              <th>Day Phone</th>
              <th>Primary Phone</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td><a href="/ViewSpeaker">Victor</a></td>
            <td><a href="">lemusv@wit.edu</a></td>
            <td><a href="">xxx-xxx-xxxx</a></td>
            <td><a href="">xxx-xxx-xxxx</a></td>

          </tr>
          <tr>
            <td><a href="">Carlos</a></td>
            <td><a href="">Carlos@wit.edu</a></td>
            <td><a href="">xxx-xxx-xxxx</a></td>
            <td><a href="">xxx-xxx-xxxx</a></td>
          </tr>
          <tr>
            <td><a href="">Brian</a></td>
            <td><a href="">Brian@wit.edu</a></td>
            <td><a href="">xxx-xxx-xxxx</a></td>
            <td><a href="">xxx-xxx-xxxx</a></td>
          </tr>
        </tbody>
        </Table>*/
    render(){
        return(
        <div>
        <div id='session-list'><h1 className="text-center">Session List</h1></div>
        <ul>
        { this.state.speakers.map(speaker => <li>{speakers.Speaker_name}</li>)}
        { this.state.speakers.map(session => <li>{speakers.email}</li>)}
        { this.state.speakers.map(session => <li>{speakers.primary_phone}</li>)}
        { this.state.speakers.map(session => <li>{speakers.day_phone}</li>)}
      </ul>
        </div>
        );
    }
}

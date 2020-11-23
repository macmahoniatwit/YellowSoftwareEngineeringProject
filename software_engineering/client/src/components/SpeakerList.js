import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from "axios";
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
        <div id='speaker-list'><h1 className="text-center">Speaker List</h1></div>
        <Table>
          <thead>
            <tr>
              <th>Name of the Speaker</th>
              <th>Email</th>
              <th>Day Phone</th>
              <th>Primary Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.speakers.map((speaker) =>
          
            <tr>
              <td>{speaker.Speaker_name}</td>
              <td>{speaker.email}</td>
              <td>{speaker.primary_phone}</td>
              <td>{speaker.day_phone}</td>
            </tr>
          )}
          </tbody> 
        </Table>
          
        {/* <ul>
        { this.state.speakers.map(speakers => <li>{speakers.Speaker_name}</li>)}
        { this.state.speakers.map(speakers => <li>{speakers.email}</li>)}
        { this.state.speakers.map(speakers => <li>{speakers.primary_phone}</li>)}
        { this.state.speakers.map(speakers => <li>{speakers.day_phone}</li>)}
      </ul> */}
        </div>
        );
    }
}

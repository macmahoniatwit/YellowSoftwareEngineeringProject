import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
export default class SpeakerList extends Component {
    render(){
        return(
            <div>
        <h1 className="text-center">Speaker List</h1>
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
        </Table>
      </div>
        );
    }
}

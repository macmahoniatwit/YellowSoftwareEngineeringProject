import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
export default class ListSession extends Component {
  render(){
    return(
      <div>
        <h1 className="text-center">Session List</h1>
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
          <tr>
            <td><a href="/ViewSession">Victor</a></td>
            <td><a href="">Theory of Everything</a></td>
            <td><a href="">Annex</a></td>
            <td><a href="">9AM-10AM</a></td>

          </tr>
          <tr>
            <td><a href="">Carlos</a></td>
            <td><a href="">Why c is good</a></td>
            <td><a href="">Beatty</a></td>
            <td><a href="">10:30AM-11AM</a></td>
          </tr>
          <tr>
            <td><a href="">Brian</a></td>
            <td><a href="">What not to do</a></td>
            <td><a href="">Watson</a></td>
            <td><a href="">11AM-12PM</a></td>
          </tr>
        </tbody>
</Table>
      </div>
    );
  }

}

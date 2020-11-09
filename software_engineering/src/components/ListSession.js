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
              <th>Room</th>
              <th>Time</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td><a href="">Victor</a></td>
            <td><a href="">53</a></td>
            <td><a href="">9AM</a></td>
          </tr>
          <tr>
            <td><a href="">Carlos</a></td>
            <td><a href="">15</a></td>
            <td><a href="">10:30AM</a></td>
          </tr>
          <tr>
            <td><a href="">Brian</a></td>
            <td><a href="">45</a></td>
            <td><a href="">11AM</a></td>
          </tr>
        </tbody>
</Table>
      </div>
    );
  }

}

import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
export default class AddSession extends Component {
  render(){
    return(
      <div>
        <h1 className="text-center">Add a Session</h1>
        <div>
          <h2 className="text-Left"> Speaker Info</h2>
        <Form>
          <Form.Group controlId="SpeakerName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Speaker Name"/>
          </Form.Group>

          <Form.Group controlId="SpeakerEmail">
            <Form.Label>SpeakerEmail</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group controlId="SpeakerPhone">
            <Form.Label>Speaker Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter Speaker Phone" />
          </Form.Group>

          <Form.Group controlId="SpeakerDayOf">
            <Form.Label>Day of Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter Day of Phone" />
          </Form.Group>
          
          </Form>
        </div>
        <div>
        <h2 className="text-Left"> Time Info</h2>
        <Form>
          <Form.Group controlId="StartTime">
            <Form.Label>Session Start Time</Form.Label>
            <Form.Control type="text" placeholder="Enter Start Time" />
          </Form.Group>

          <Form.Group controlId="EndTime">
            <Form.Label>Session End Time</Form.Label>
            <Form.Control type="text" placeholder="Enter End Time" />
          </Form.Group>
</Form>
        </div>
        <div>
        <h2 className="text-Left"> Room Info</h2>
        <Form>
          <Form.Group controlId="RoomNumber">
            <Form.Label>Room Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Room Number" />
          </Form.Group>

          <Form.Group controlId="Room Capacity">
            <Form.Label>Room Capacity</Form.Label>
            <Form.Control type="text" placeholder="Enter Room Capacity" />
          </Form.Group>
        </Form>
        </div>
        <Button className="pull-right" variant="primary" type="submit">Submit</Button>
      </div>
    );
  }

}

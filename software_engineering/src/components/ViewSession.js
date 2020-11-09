import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
export default class ViewSession extends Component {
  render(){
    return(
      <div>
        <h1 className="text-center">View Session</h1>
        <Button variant="primary">Edit</Button>
        <div>
          <h2 className="text-Left"> Speaker Info</h2>
        <Form>
          <Form.Group controlId="SpeakerName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Victor" readOnly/>
          </Form.Group>

          <Form.Group controlId="SpeakerEmail">
            <Form.Label>SpeakerEmail</Form.Label>
            <Form.Control type="email" placeholder="Victor Email" readOnly/>
          </Form.Group>
          <Form.Group controlId="SpeakerPhone">
            <Form.Label>Speaker Phone</Form.Label>
            <Form.Control type="text" placeholder="Victor Phone" readOnly/>
          </Form.Group>

          <Form.Group controlId="SpeakerDayOf">
            <Form.Label>Day of Phone</Form.Label>
            <Form.Control type="text" placeholder="Victor Day of Phone" readOnly/>
          </Form.Group>
          
          </Form>
        </div>
        <div>
        <h2 className="text-Left"> Time Info</h2>
        <Form>
          <Form.Group controlId="StartTime">
            <Form.Label>Session Start Time</Form.Label>
            <Form.Control type="text" placeholder="9AM" readOnly/>
          </Form.Group>

          <Form.Group controlId="EndTime">
            <Form.Label>Session End Time</Form.Label>
            <Form.Control type="text" placeholder="10AM" readOnly/>
          </Form.Group>
</Form>
        </div>
        <div>
        <h2 className="text-Left"> Room Info</h2>
        <Form>
          <Form.Group controlId="RoomNumber">
            <Form.Label>Room Number</Form.Label>
            <Form.Control type="text" placeholder="53" readOnly/>
          </Form.Group>

          <Form.Group controlId="Room Capacity">
            <Form.Label>Room Capacity</Form.Label>
            <Form.Control type="text" placeholder="85" readOnly/>
          </Form.Group>
        </Form>
        </div>
      </div>
    );
  }

}

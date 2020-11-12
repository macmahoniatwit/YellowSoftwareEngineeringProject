import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
export default class ViewSession extends Component {
  render(){
    return(
      <div>
        <h1 className="text-center">Session View</h1>
        <Container>
        <Button variant="primary">Edit</Button>
        <h2 className="text-Left">Select Speaker</h2>
          <Row>
            <Col>
            <Form>
              <Form.Group controlId="SelectSpeaker">
              <Form.Label>Select Speaker:&nbsp;</Form.Label>
                <select name="Speaker" id="Speaker" disabled="true">
                  <option value="Victor" selected>Victor Lemus</option>
                  <option value="Carlos">Carlos LastName</option>
                  <option value="Brian">Brian LastName</option>
                </select>
              </Form.Group>
            </Form>
            </Col>
          </Row>
          <h2 className="text-Left">Select Session Time</h2>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="StartTime">
                  <Form.Label>Start Time - End Time:&nbsp;</Form.Label>
                  <select name="Speaker" id="Speaker" disabled="true">
                    <option value="9AM-10AM" selected>9AM-10AM</option>
                    <option value="10AM-11AM">10AM-11AM</option>
                    <option value="11AM-12PM">11AM-12PM</option>
                    <option value="1PM-2PM">1PM-2PM</option>
                  </select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <h2 className="text-Left">Room Info</h2>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="RoomName">
                  <Form.Label>Room Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Room Name" readOnly/>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="Room Capacity">
                  <Form.Label>Room Capacity</Form.Label>
                  <Form.Control type="text" placeholder="Enter Room Capacity" readOnly/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

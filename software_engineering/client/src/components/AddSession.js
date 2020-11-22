import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
export default class AddSession extends Component {
  render(){
    return(
      <div>
        <div id='add-session'><h1 className="text-center">Add a Session</h1></div>
        <Container>
        <h2 className="text-Left">Speaker Info</h2>
          <Row>
            <Col>
            <Form>
              <Form.Group controlId="SelectSpeaker">
              <Form.Label>Select Speaker:&nbsp;</Form.Label>
                <select name="Speaker" id="Speaker">
                  <option value="Default" selected>Select</option>
                  <option value="Victor">Victor Lemus</option>
                  <option value="Carlos">Carlos LastName</option>
                  <option value="Brian">Brian LastName</option>
                </select>
              </Form.Group>
            </Form>
            </Col>
          </Row>
          <h2 className="text-Left"> Session Info</h2>
          <Row>
            <Col sm={8}>
            <Form>
                <Form.Group controlId="SessionName">
                  <Form.Label>Session Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Session Name" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="StartTime">
                  <Form.Label>Start Time - End Time:&nbsp;</Form.Label>
                  <select name="Speaker" id="Speaker">
                    <option value="Default" selected>Select</option>
                    <option value="9AM-10AM">9AM-10AM</option>
                    <option value="10AM-11AM">10AM-11AM</option>
                    <option value="11AM-12PM">11AM-12PM</option>
                    <option value="1PM-2PM">1PM-2PM</option>
                  </select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <h2 className="text-Left"> Room Info</h2>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="RoomName">
                  <Form.Label>Room Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Room Name" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="Room Capacity">
                  <Form.Label>Room Capacity</Form.Label>
                  <Form.Control type="text" placeholder="Enter Room Capacity" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button className="pull-right" variant="primary" type="submit">Submit</Button>
        </Container>
      </div>
    );
  }
}

import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
export default class AddRoom extends Component {
  render(){
    return(
      <div>
        <div id='add-room'><h1 className="text-center">Add a Room</h1></div>
        <Container>
          <h2 className="text-Left"> New Room</h2>
          <Row>
            <Col sm={8}>
            <Form>
                <Form.Group controlId="SessionName">
                  <Form.Label>Room Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Session Name" />
                </Form.Group>

                <Form.Group controlId="RoomName">
                  <Form.Label>Room Number</Form.Label>
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

import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
export default class AddSpeaker extends Component {
  render(){
    return(
      <div>
        <div id='add-speaker'><h1 className="text-center">Add a Speaker</h1></div>
        <Container>
          <h2 className="text-Left">Speaker Info</h2>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="SpeakerName">
                  <Form.Label>Speaker Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Speaker Name" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="SpeakerEmail">
                  <Form.Label>Speaker Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Speaker Email" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="PrimaryPhone">
                  <Form.Label>Speaker Primary Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Primary Phone Number" />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="DayPhone">
                  <Form.Label>Speaker Day Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Day Phone Number" />
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

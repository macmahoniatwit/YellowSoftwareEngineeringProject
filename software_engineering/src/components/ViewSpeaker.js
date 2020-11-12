import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
export default class ViewSpeaker extends Component {
  render(){
    return(
      <div>
        <h1 className="text-center">Speaker View</h1>
        <Container>
          <Button variant="primary">Edit</Button>
          <h2 className="text-Left">Speaker Info</h2>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="SpeakerName">
                  <Form.Label>Speaker Name</Form.Label>
                  <Form.Control type="text" placeholder="Victor Lemus" readOnly/>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="SpeakerEmail">
                  <Form.Label>Speaker Email</Form.Label>
                  <Form.Control type="text" placeholder="lemusv@wit.edu" readOnly/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="PrimaryPhone">
                  <Form.Label>Speaker Primary Phone</Form.Label>
                  <Form.Control type="text" placeholder="xxx-xxx-xxxx" readOnly/>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="DayPhone">
                  <Form.Label>Speaker Day Phone</Form.Label>
                  <Form.Control type="text" placeholder="xxx-xxx-xxxx" readOnly/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

import axios from 'axios';
import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
export default class AddSpeaker extends Component {
  state = {
    speaker: '',
    email: '',
    primary_phone: '',
    day_phone: ''
  }

  handleChangeSpeaker = event => {
    this.setState({ speaker: event.target.value });
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleChangePrimaryPhone = event => {
    this.setState({ primary_phone: event.target.value });
  }

  handleChangeDayPhone = event => {
    this.setState({ day_phone: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const new_speaker = {
      Speaker_name: this.state.speaker,
      email: this.state.email,
      primary_phone: this.state.primary_phone,
      day_phone: this.state.day_phone
    };

    // console.log(new_speaker)

    axios.post('http://localhost:3001/AddSpeaker', new_speaker)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render(){
    return(
      <div>
        <div id='add-speaker'><h1 className="text-center">Add a Speaker</h1></div>
        <Container>
          <h2 className="text-Left">Speaker Info</h2>
          <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="SpeakerName">
                  <Form.Label>Speaker Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Speaker Name" onChange={this.handleChangeSpeaker}/>
                </Form.Group>
                <Form.Group controlId="SpeakerEmail">
                  <Form.Label>Speaker Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Speaker Email" onChange={this.handleChangeEmail}/>
                </Form.Group>
                <Form.Group controlId="PrimaryPhone">
                  <Form.Label>Speaker Primary Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Primary Phone Number" onChange={this.handleChangePrimaryPhone} />
                </Form.Group>
                <Form.Group controlId="DayPhone">
                  <Form.Label>Speaker Day Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Day Phone Number" onChange={this.handleChangeDayPhone}/>
                </Form.Group>
                <Button className="pull-right" variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
          {/* <Row>
            <Col>
              <Form>
                <Form.Group controlId="SpeakerName">
                  <Form.Label>Speaker Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Speaker Name" onChange={this.handleChangeSpeaker}/>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="SpeakerEmail">
                  <Form.Label>Speaker Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter Speaker Email" onChange={this.handleChangeEmail}/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="PrimaryPhone">
                  <Form.Label>Speaker Primary Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Primary Phone Number" onChange={this.handleChangePrimaryPhone} />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="DayPhone">
                  <Form.Label>Speaker Day Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter Day Phone Number" onChange={this.handleChangeDayPhone}/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button className="pull-right" variant="primary" type="submit" onChange={this.handleChange} >Submit</Button> */}
        </Container>
      </div>
    );
  }

}

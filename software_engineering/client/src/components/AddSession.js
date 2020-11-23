import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import axios from "axios";
export default class AddSession extends Component {
  state = {
    speakers: [],
    times: [],
    currentIndex: -1
  }

  componentDidMount() {
    axios.get("http://localhost:3001/sessionspeakers")
      .then(res => {
        const speakers = res.data;
        this.setState({ speakers });
        console.log(res.data)
      });

      axios.get("http://localhost:3001/sessiontimes")
      .then(res => {
        const times = res.data;
        this.setState({ times });
        console.log(res.data)
      });
  }

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
                  {this.state.speakers.map((speaker) =>
                    <option value={speaker}>{speaker.Speaker_name}</option>
                  )}
                </select>
              </Form.Group>
              <h2 className="text-Left"> Session Info</h2>
              <Form.Group controlId="SessionName">
                  <Form.Label>Session Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Session Name" />
              </Form.Group>
              <Form.Group controlId="StartTime">
                  <Form.Label>Start Time - End Time:&nbsp;</Form.Label>
                  <select name="Time" id="Time">
                    <option value="Default" selected>Select</option>
                    {this.state.times.map((time) =>
                      <option value={time}>{time.time}</option>
                    )}
                  </select>
              </Form.Group>
              <h2 className="text-Left"> Room Info</h2>
              <Form.Group controlId="RoomName">
                <Form.Label>Room Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Room Name" />
              </Form.Group>
              <Form.Group controlId="Room Capacity">
                <Form.Label>Room Capacity</Form.Label>
                <Form.Control type="text" placeholder="Enter Room Capacity" />
              </Form.Group>
              <Button className="pull-right" variant="primary" type="submit">Submit</Button>
            </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

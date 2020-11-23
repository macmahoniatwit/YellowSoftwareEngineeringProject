import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import axios from "axios";
export default class AddSession extends Component {
  state = {
    speakers: [],
    times: [],
    rooms: [],
    speakerId: '',
    timeId:'',
    roomId:'',
    sessionName:'',
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

      axios.get("http://localhost:3001/RoomList")
      .then(res => {
        const rooms = res.data;
        this.setState({ rooms });
        console.log(res.data)
      });
  }

  handleChangeSpeakerId = event => {
    console.log(event.target.value)
    this.setState({ speakerId: event.target.value });
    console.log(this.state.speakerId);
  }

  handleChangeTimeId = event => {
    this.setState({ timeId: event.target.value });
    console.log(this.state.timeId);
  }

  handleChangeRoomId = event => {
    console.log(event.target.value);
    this.setState({ roomId: event.target.value });
    console.log(this.state.roomId);
  }

  handleChangeSesionName = event => {
    this.setState({ sessionName: event.target.value });
    console.log(this.state.sessionName);
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);

    const new_session = {
      speakerId: this.state.speakerId,
      timeId: this.state.timeId,
      roomId: this.state.roomId,
      sessionName: this.state.sessionName
    };

    axios.post('http://localhost:3001/AddSession', new_session)
      .then(res => {
        console.log(res)
        console.log(res.data)
        window.location.reload()
      })
  }

  render(){

    return(
      <div>
        <div id='add-session'><h1 className="text-center">Add a Session</h1></div>
        <Container>
        <h2 className="text-Left">Speaker Info</h2>
          <Row>
            <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="SelectSpeaker">
              <Form.Label>Select Speaker:&nbsp;</Form.Label>
                <select name="Speaker" id="Speaker" onChange={this.handleChangeSpeakerId} value={this.state.speaker_id}>
                  <option value="Default" selected>Select</option>
                  {this.state.speakers.map((speaker) =>
                    <option value={speaker.speaker_id}>{speaker.Speaker_name}</option>
                  )}
                </select>
              </Form.Group>
              <h2 className="text-Left"> Session Info</h2>
              <Form.Group controlId="SessionName" value={this.state.sessionName}>
                  <Form.Label>Session Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Session Name"  onChange={this.handleChangeSesionName}/>
              </Form.Group>
              <Form.Group controlId="StartTime">
                  <Form.Label>Start Time - End Time:&nbsp;</Form.Label>
                  <select name="Time" id="Time" onChange={this.handleChangeTimeId} value={this.state.timeId}>
                    <option value="Default" selected>Select</option>
                    {this.state.times.map((time) =>
                      <option value={time}>{time.time}</option>
                    )}
                  </select>
              </Form.Group>
              <h2 className="text-Left"> Room Info</h2>
              <Form.Group controlId="RoomName">
                <select name="Room" id="Room" onChange={this.handleChangeRoomId} value={this.state.Room_id}>
                    <option value="Default" selected>Select</option>
                    {this.state.rooms.map((room) =>
                      <option value={room.Room_id}>{room.Room_name}</option>
                    )}
                </select>
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

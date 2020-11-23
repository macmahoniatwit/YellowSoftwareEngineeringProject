import axios from 'axios';
import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
export default class AddRoom extends Component {
  state = {
    room_name:'',
    room_capacity: ''
  }

  handleChangeRoomName = event => {
    this.setState({ room_name: event.target.value });
  }

  handleChangeRoomCapacity = event => {
    this.setState({ room_capacity: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const new_room = {
      room_name: this.state.room_name,
      room_capacity: this.state.room_capacity
    }

    axios.post('http://localhost:3001/AddRoom', new_room)
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render(){
    return(
      <div>
        <div id='add-room'><h1 className="text-center">Add a Room</h1></div>
        <Container>
          <h2 className="text-Left"> New Room</h2>
          <Row>
            <Col sm={8}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="RoomName">
                  <Form.Label>Room Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Room Name" onChange={this.handleChangeRoomName}/>
                </Form.Group>

                <Form.Group controlId="RoomCapacity">
                  <Form.Label>Room Capacity</Form.Label>
                  <Form.Control type="text" placeholder="Enter Room Capacity" onChange={this.handleChangeRoomCapacity}/>
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

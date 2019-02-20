import React, { Component } from 'react'
import ConnectionMapContainer from '../containers/ConnectionMapContainer';
import { Button, Container, Row, Col, ListGroup, ListGroupItem, Jumbotron, Form, FormGroup, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { FaRegTrashAlt } from 'react-icons/fa'
class MapPage extends Component {

  state = {
    message: ""
  }

  componentDidMount() {
    if (this.props.userId) {
      this.props.fetchUserConnections(this.props.userId)
    }
    if (localStorage.getItem("token") && !this.props.userId) {
      this.props.getUser(localStorage.getItem("token"))
    }
    if (this.props.user.connections && this.props.user.connections.length) {
      this.props.fetchConnections(this.props.user.connections)
    }
  }

  _onClick = (id) => {
    this.props.addDistance(id)
  }

  _onDisconnect = (id) => {
    this.props.disconnect(id)
  }

  _onDeleteDate = (id, date) => {
    this.props.removeDate(id, date)
  }

  _onMessageSend = (e, id) => {
    e.preventDefault();
    const obj = {
      userId: this.props.user.id,
      message: this.state.message
    }
    this.props.sendMessage(id, obj)
  }

  _onMessageRemove = (id, date) => {
    this.props.removeMessage(id, date)
  }

  _onChange = ({target}) => {
    this.setState({message: target.value})
  }

  render() {
    if (!localStorage.getItem("token")) {
      return (
        <Redirect to="/" />
      )
    }

    if (this.props.user.connections && !this.props.connections.length) {
      this.props.fetchConnections(this.props.user.connections)
    }
    const confirmedConnection = this.props.connections.filter(connection => connection.user1Accept && connection.user2Accept && !connection.declined)[0];

    if(!confirmedConnection) {
      return (
        <Container>
          <h1>No accepted carpools yet.</h1>
        </Container>
      )
    }

    let otherUser;
    if (this.props.user.id !== confirmedConnection.user1.id) {
      otherUser = confirmedConnection.user1;
    } else {
      otherUser = confirmedConnection.user2
    }

    return (
      <>
        <Container>
          <ConnectionMapContainer />
          <Row style={{marginTop: "2%"}}>
            <Col md={8}> 
              <Jumbotron>
                <h1 className="display-6">Carpooling with {`${otherUser.firstName} ${otherUser.lastName}`}</h1>
                <p className="lead">Leg Distance: {confirmedConnection.distance}mi</p>
                <hr className="my-2" />
                <p className="lead">Legs Traveled: {confirmedConnection.dates ? confirmedConnection.dates.length : 0}</p>
                <hr className="my-2" />
                <p className="lead">Miles Saved: {confirmedConnection.miles}mi</p>
                <p className="lead">
                  <Button outline color="danger" onClick={() => this._onDisconnect(confirmedConnection.id)}>Disconnect</Button>
                </p>
              </Jumbotron>                   
            </Col>
            <Col style={{ height: "325px"}} md={4}>
              <Button style={{width: "100%", marginBottom: "2%"}} color="success" onClick={() => this._onClick(confirmedConnection.id)}>Add Leg Traveled</Button>
              <div style={{display: "flex", justifyContent: "center"}}>
                Dates
              </div>
              <div style={{height: "100%", overflow: "auto" }}>
                <ListGroup >
                  {confirmedConnection.dates && confirmedConnection.dates.map(date => <ListGroupItem key={date} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>{moment(date).format("MMM Do, h:mm A")} <FaRegTrashAlt style={{ cursor: "pointer", color: "#dc3545"}} onClick={() => this._onDeleteDate(confirmedConnection.id, date)} /></ListGroupItem>)}
                </ListGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={(e) => this._onMessageSend(e, confirmedConnection.id)}>
                <FormGroup>
                  <Input onChange={this._onChange} value={this.state.message} type="textarea" name="message" placeholder="Message"/>
                </FormGroup>
                <Button color="success">Send</Button>
              </Form>
            </Col>
            <Col>
              <ListGroup>
                {confirmedConnection.messages && confirmedConnection.messages.map((message, i) => 
                <ListGroupItem key={i}>
                  <Row>
                    <Col md={11}>
                    {message.userId === this.props.user.id ? this.props.user.firstName : otherUser.firstName} 
                    {": " + message.message}
                    </Col>
                      <Col md={1}>                
                      {this.props.user.id === message.userId && <FaRegTrashAlt style={{ cursor: "pointer", color: "#dc3545" }}
                      onClick={() => this._onMessageRemove(confirmedConnection.id, message.date)}/>}
                    </Col>
                  </Row>
                </ListGroupItem>)}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default MapPage
import React, { Component } from 'react'
import ConnectionMapContainer from '../containers/ConnectionMapContainer';
import { Button, Container, Row, Col, ListGroup, ListGroupItem, Jumbotron } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

class MapPage extends Component {

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
                <h1 className="display-5">Carpooling with {`${otherUser.firstName} ${otherUser.lastName}`}</h1>
                <p className="lead">Leg Distance: {confirmedConnection.distance}</p>
                <hr className="my-2" />
                <p className="lead">Legs Traveled: {confirmedConnection.dates.length}</p>
                <hr className="my-2" />
                <p className="lead">Miles Saved: {confirmedConnection.miles}</p>
                <p className="lead">
                  <Button outline color="danger" onClick={() => this._onDisconnect(confirmedConnection.id)}>Disconnect</Button>
                </p>
              </Jumbotron>                   
            </Col>
            <Col style={{ height: "300px"}} md={4}>
              <Button style={{width: "100%", marginBottom: "2%"}} color="success" onClick={() => this._onClick(confirmedConnection.id)}>Add Leg Traveled</Button>
              <div style={{display: "flex", justifyContent: "center"}}>
                Dates
              </div>
              <div style={{height: "100%", overflow: "auto" }}>
                <ListGroup >
                  {confirmedConnection.dates && confirmedConnection.dates.map(date => <ListGroupItem key={date} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{moment(date).format("MMM Do, h:mm A")}</ListGroupItem>)}
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default MapPage
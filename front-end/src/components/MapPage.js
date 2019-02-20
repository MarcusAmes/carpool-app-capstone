import React, { Component } from 'react'
import ConnectionMapContainer from '../containers/ConnectionMapContainer';
import { Button, Container } from 'reactstrap'


class MapPage extends Component {

  componentDidMount() {
    if (this.props.user.connections && this.props.user.connections.length) {
      this.props.fetchConnections(this.props.user.connections)
    }
  }

  _onClick = (id) => {
    this.props.addDistance(id)
  }

  _onDisconnect = (id) => {
    console.log(id)
    this.props.disconnect(id)
  }

  render() {

    const confirmedConnection = this.props.connections.filter(connection => connection.user1Accept && connection.user2Accept && !connection.declined)[0];

    if(!confirmedConnection) {
      return (
        <h1>No accepted carpools yet.</h1>
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
        <ConnectionMapContainer />
        <Container>
          <h1>Carpooling with {`${otherUser.firstName} ${otherUser.lastName}`}</h1>
          <h2>Leg Distance: {confirmedConnection.distance}</h2>
          <h2>Miles Saved: {confirmedConnection.miles}</h2>
          <Button color="success" onClick={() => this._onClick(confirmedConnection.id)}>Add Leg Traveled</Button>
          <Button outline color="danger" onClick={() => this._onDisconnect(confirmedConnection.id)}>Disconnect</Button>
        </Container>
      </>
    )
  }
}

export default MapPage
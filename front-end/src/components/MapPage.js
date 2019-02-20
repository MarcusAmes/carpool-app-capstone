import React, { Component } from 'react'
import ConnectionMapContainer from '../containers/ConnectionMapContainer';
import { Button } from 'reactstrap'


class MapPage extends Component {

  componentDidMount() {
    if (this.props.userId) {
      this.props.fetchUserConnections(this.props.userId)
    }
    if (this.props.user.connections && this.props.user.connections.length) {
      this.props.fetchConnections(this.props.user.connections)
    }
  }

  _onClick = (id) => {
    this.props.addDistance(id)
  }

  render() {

    const confirmedConnection = this.props.connections.filter(connection => connection.user1Accept && connection.user2Accept)[0];

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
        <h1>Carpooling with {`${otherUser.firstName} ${otherUser.lastName}`}</h1>
        <h2>Miles Saved: {confirmedConnection.miles}</h2>
        <Button onClick={() => this._onClick(confirmedConnection.id)}>Add Leg Traveled</Button>
      </>
    )
  }
}

export default MapPage
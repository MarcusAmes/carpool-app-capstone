import React, { Component } from 'react'
import AddBusinessFormContainer from '../containers/AddBusinessFormContainer';
import ConnectCardContainer from '../containers/ConnectCardContainer';
import { ListGroup } from 'reactstrap';
import ConnectionMapContainer from '../containers/ConnectionMapContainer';
import { Redirect } from 'react-router-dom'

class HomePage extends Component {

  componentDidMount() {
    if(this.props.user.id) {
      this.props.fetchUserConnections(this.props.user.id)
    }
    if (this.props.user.connections && this.props.user.connections.length) {
      this.props.fetchConnections(this.props.user.connections)
    }
  }

  render() {

    if(!this.props.user.id) {
      return(
        <Redirect to="/" />
      )
    }

    if(!this.props.user.businessId) {
      return (
        <>
          <h2>Get started by adding your Workplace</h2>
          <AddBusinessFormContainer />
        </>
      )
    }

    if (!this.props.user.connections || !this.props.user.connections.length) {
      return (
        <>
          <h2> No matches yet. Check back soon</h2>
        </>
      )
    }

    const sortedConnections = this.props.connections.sort((a, b) => b.percent - a.percent)
    const cards = sortedConnections.map(connection => <ConnectCardContainer connection={connection} key={connection.id} />)
    
    return (
      <>
        {this.props.user.connections.length !== this.props.connections.length ? this.props.fetchConnections(this.props.user.connections) : null}
        {this.props.connections.filter(connection => connection.user1Accept && connection.user2Accept).length > 0 &&
        <ConnectionMapContainer />}
        <ListGroup>
          {cards}
        </ListGroup>
      </>
    )
  }
}

export default HomePage
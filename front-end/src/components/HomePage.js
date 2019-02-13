import React, { Component } from 'react'
import AddBusinessFormContainer from '../containers/AddBusinessFormContainer';
import ConnectCardContainer from '../containers/ConnectCardContainer';
import { ListGroup } from 'reactstrap';



class HomePage extends Component {

  render() {

    if(!this.props.user.businessId) {
      return (
        <>
          <h2>Get started by adding your Workplace</h2>
          <AddBusinessFormContainer />
        </>
      )
    }

    if(!this.props.user.connections.length) {
      return (
        <>
          <h2> No Matches yet. Check back soon</h2>
        </>
      )
    }

    const sortedConnections = this.props.user.connections.sort((a, b) => b.connectionPercent - a.connectionPercent)
    const cards = sortedConnections.map(connection => <ConnectCardContainer connection={connection} key={connection.id} />)
    
    return (
      <ListGroup>
        {cards}
      </ListGroup>
    )
  }
}

export default HomePage
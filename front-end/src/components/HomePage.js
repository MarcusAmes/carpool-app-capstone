import React, { Component } from 'react'
import AddBusinessFormContainer from '../containers/AddBusinessFormContainer';
import ConnectCardContainer from '../containers/ConnectCardContainer';
import { ListGroup, Container, Spinner } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import NoMatches from './NoMatches';

class HomePage extends Component {

  render() {

    if(!localStorage.getItem("token")) {
      return(
        <Redirect to="/" />
      )
    }

    if(this.props.user.loading) {
      return (
        <Spinner color="dark" />
      )
    }

    const sortedConnections = this.props.connections.sort((a, b) => b.percent - a.percent)
    const filterConnections = sortedConnections.filter(connection => !connection.declined)

    if(!this.props.user.businessId) {
      return (
        <Container>
          <h2 style={{textAlign: "center"}}>Get started by adding your Workplace</h2>
          <p style={{ textAlign: "center" }}>
            Be sure to check back soon, and tell your peers. The more people using CarTool the better it works.
          </p>
          <AddBusinessFormContainer />
        </Container>
      )
    }

    if (!this.props.user.connections || !this.props.user.connections.length || !filterConnections.length) {
      return (
        <>
          {this.props.user.connections && this.props.user.connections.length !== this.props.connections.length ? this.props.fetchConnections(this.props.user.connections) : null}
          <NoMatches />
        </>
      )
    }

    
    const cards = filterConnections.map(connection => <ConnectCardContainer connection={connection} key={connection.id} />)
    
    return (
      <Container>
        {this.props.user.connections.length !== this.props.connections.length ? this.props.fetchConnections(this.props.user.connections) : null}
        <h1 style={{textAlign: "center"}}>Possible Connections</h1>
        <ListGroup>
          {cards}
        </ListGroup>
      </Container>
    )
  }
}

export default HomePage
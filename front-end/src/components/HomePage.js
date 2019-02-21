import React, { Component } from 'react'
import AddBusinessFormContainer from '../containers/AddBusinessFormContainer';
import ConnectCardContainer from '../containers/ConnectCardContainer';
import { ListGroup, Container, Spinner } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import NoMatches from './NoMatches';

class HomePage extends Component {
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
          <h2>Get started by adding your Workplace</h2>
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
        <h1>Possible Connections</h1>
        <ListGroup>
          {cards}
        </ListGroup>
      </Container>
    )
  }
}

export default HomePage
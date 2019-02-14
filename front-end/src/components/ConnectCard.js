import React, { Component } from 'react'
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

class ConnectCard extends Component {
  _onClick = () => {
    this.props.addConnection(this.props.connection.id, this.props.id)
  }

  render() {
    let otherUser;
    if(this.props.id !== this.props.connection.user1.id) {
      otherUser = this.props.connection.user1;
    } else {
      otherUser = this.props.connection.user2;
    }

    let status = <Button onClick={this._onClick} outline color="success">Carpool</Button>
    if (this.props.connection.user1Accept && this.props.connection.user2Accept) {
      status = <p>Connected</p>
    } else if ((this.props.id === this.props.connection.user1.id && this.props.connection.user1Accept) || (this.props.id === this.props.connection.user2.id && this.props.connection.user2Accept)) {
      status = <p>Waiting on a response.</p>
    }
    
    return (
      <ListGroupItem>
        <Row>
          <Col>
            {otherUser.firstName + " " + otherUser.lastName}
          </Col>
          <Col>
            {`${(this.props.connection.percent * 100).toFixed(2)}% match`}
          </Col>
          <Col>
            {status}
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}

export default ConnectCard
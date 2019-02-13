import React, { Component } from 'react'
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

class ConnectCard extends Component {
  render() {
    
    return (
      <ListGroupItem>
        <Row>
          <Col>
            {this.props.connection.firstName + " " + this.props.connection.lastName}
          </Col>
          <Col>
            {`${(this.props.connection.connectionPercent * 100).toFixed(2)}% match`}
          </Col>
          <Col>
            <Button outline color="success">Carpool</Button>
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}

export default ConnectCard
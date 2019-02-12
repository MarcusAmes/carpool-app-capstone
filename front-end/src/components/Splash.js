import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

const style ={
  left: {
    color: "white",
    backgroundColor: "darkorange"
  },
  right: {
    color: "darkorange"
  }
}

class Splash extends Component {
  render() {
    
    return (
      <div style={{height: "100vh"}}>
        <Row style={{height: "100%"}}>
          <Col style={style.left}>
            <h1>
              Carpool
            </h1>
          </Col>
          <Col style={style.right}>
            <h1>
              Beat the Traffic, Meet New People, and Save the World
            </h1>
            <h2>
              Login
            </h2>
            <h2>
              Signup
            </h2>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Splash
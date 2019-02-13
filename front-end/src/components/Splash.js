import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap';
import LoginFormContainer from '../containers/LoginFormContainer';
import { Link } from 'react-router-dom'

const style ={
  left: {
    color: "white",
    backgroundColor: "#28a745"
  },
  right: {
    marginTop: "1%",
    color: "#28a745"
  },
  center: {
    display: "flex", 
    justifyContent: "center"
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
            <LoginFormContainer />
            <div style={{...style.center, marginTop: "40%"}}>
              <div>
                <h2 style={{marginBottom: "5%"}}>
                  Join the carpool world today!
                </h2> 
                <div style={style.center}>
                  <Button tag={Link} to="/register" outline color="success">Sign Up</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Splash
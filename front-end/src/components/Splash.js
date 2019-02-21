import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap';
import LoginFormContainer from '../containers/LoginFormContainer';
import { Link } from 'react-router-dom'
import background from '../images/luke-stackpoole-578017-unsplash.jpg'
import { FaCarAlt, FaEnvira, FaHandshake } from 'react-icons/fa'
const style ={
  left: {
    color: "white",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  right: {
    marginTop: "1%",
    color: "#343a40"
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
            <div style={{...style.center, marginTop: "5%", opacity: "1"}}>
              <h1 style={{ fontSize: "4rem" }}>
                CarTool
              </h1>
            </div>
            <div style={{ ...style.center, marginTop: "3%", opacity: "1" }}>
              <h3 style={{ fontSize: "3rem" }}>
                The tool for carpoolers
              </h3>
            </div>
            <div style={{ ...style.center, marginTop: "30%", opacity: "1" }}>
              <h2 style={{ fontSize: "3rem" }}>
                Enjoy the benefits
              </h2>
            </div>
            <Row style={{marginTop: "5%"}}>
              <Col>
                <h4 style={{fontSize: "2rem", opacity: "1"}}>
                  <div style={style.center}>
                    Beat the Traffic
                  </div>
                  <div style={{ ...style.center, fontSize: "3.5rem", color: "#dc3545"}}>
                    <FaCarAlt />
                  </div>               
                </h4>
              </Col>
              <Col>
                <h4 style={{fontSize: "2rem", opacity: "1"}}>
                  <div style={style.center}>
                    Save the Enviroment
                  </div>
                  <div style={{...style.center, fontSize: "3.5rem", color: "lightgreen"}}>
                    <FaEnvira />
                  </div>     
                </h4>
              </Col>
              <Col>
                <h4 style={{fontSize: "2rem", opacity: "1"}}>
                  <div style={style.center}>
                    Meet New People
                  </div>
                  <div style={{...style.center, fontSize: "4rem", color: "lightblue"}}>
                    <FaHandshake />
                  </div>     
                </h4>
              </Col>
            </Row>
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
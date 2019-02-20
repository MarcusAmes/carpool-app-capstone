import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'

class TopNav extends Component {

  render() {
    if (!localStorage.getItem("token") && !this.props.userId) {
      return (
        <Redirect to="/" />
      )
    }
    
    return (
      <Navbar color="success" dark expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/carpool/home">Carpool</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem active={this.props.location.pathname.includes("/home")}>
              <NavLink tag={Link} to="/carpool/home">Home</NavLink>
            </NavItem>
            <NavItem active={this.props.location.pathname.includes("/carpool/carpool")}>
              <NavLink tag={Link} to="/carpool/carpool">Carpool</NavLink>
            </NavItem>
            <NavItem active={this.props.location.pathname.includes("/profile")}>
              <NavLink tag={Link} to={`/carpool/profile/${this.props.userId}`}>Profile</NavLink>
            </NavItem>
            <NavItem style={{cursor: "pointer"}}>
              <NavLink onClick={() => {this.props.logout(); this.props.history.push("/");}}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default TopNav
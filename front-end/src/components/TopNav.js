import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row
} from 'reactstrap';
import { Link } from 'react-router-dom'

class TopNav extends Component {
  render() {
    
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/home" >reactstrap</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/connections">Connections</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default TopNav
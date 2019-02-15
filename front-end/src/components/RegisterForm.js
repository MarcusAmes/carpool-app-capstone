import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, Row, Container } from 'reactstrap';

class RegisterForm extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  }

  _onSubmit = (e) => {
    e.preventDefault();
    let address = `${this.state.address}, ${this.state.city}, ${this.state.state} ${this.state.zip}`
    let obj = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address,
      city: this.state.city
    }
    this.props.register(obj, this.props.history)
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }


  render() {
    
    return (
      <Container>
        <Form onSubmit={this._onSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this._onChange} value={this.state.email} type="email" name="email" placeholder="Email" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input onChange={this._onChange} value={this.state.password} type="password" name="password" placeholder="Password" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input onChange={this._onChange} value={this.state.firstName} type="text" name="firstName" placeholder="First Name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input onChange={this._onChange} value={this.state.lastName} type="text" name="lastName" placeholder="Last Name" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input onChange={this._onChange} value={this.state.address} type="text" name="address" placeholder="1234 Main St" />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input onChange={this._onChange} value={this.state.city} type="text" name="city" placeholder="City" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input onChange={this._onChange} value={this.state.state} type="text" name="state" placeholder="State" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input onChange={this._onChange} value={this.state.zip} type="text" name="zip" placeholder="Zip Code" />
              </FormGroup>
            </Col>
          </Row>
          <Button color="success">Sign Up</Button>
        </Form>
      </Container>
    )
  }
}

export default RegisterForm
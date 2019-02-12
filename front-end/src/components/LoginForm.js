import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {

  state = {
    email: "",
    password: ""
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    console.log(this.props)
    this.props.history.push("/home")
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }

  render() {
    
    return (
      <Form onSubmit={this._onSubmit}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input onChange={this._onChange} value={this.state.email} type="email" name="email" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input onChange={this._onChange} value={this.state.password} type="password" name="password" placeholder="Password" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Button> Sign In </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default withRouter(LoginForm)
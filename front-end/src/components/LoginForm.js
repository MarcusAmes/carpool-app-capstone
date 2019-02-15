import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {

  state = {
    email: "",
    password: ""
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }

  render() {
    
    return (
      <Form onSubmit={this._onSubmit}>
        <Row form style={{ justifyContent: "center" }}>
          <Col md={4}>
            <FormGroup>
              <Input onChange={this._onChange} value={this.state.email} type="email" name="email" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input onChange={this._onChange} value={this.state.password} type="password" name="password" placeholder="Password" />
            </FormGroup>
          </Col>
            <FormGroup>
              <Button color="success"> Sign In </Button>
            </FormGroup>
        </Row>
      </Form>
    )
  }
}

export default withRouter(LoginForm)
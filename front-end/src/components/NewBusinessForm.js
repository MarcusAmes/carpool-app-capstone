import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, Row, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom'

class NewBusinessForm extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  }

  _onSubmit = (e) => {
    e.preventDefault();
    let address = `${this.state.address}, ${this.state.city}, ${this.state.state} ${this.state.zip}`
    let obj = {
      name: this.state.name,
      address,
      city: this.state.city
    }
    this.props.newBusiness(obj, this.props.user.id, this.props.history)
  }

  _onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }


  render() {

    return (
      <Container>
        <Form onSubmit={this._onSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name of Business</Label>
                <Input onChange={this._onChange} value={this.state.name} type="text" name="name" placeholder="Name of Business" />
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
          <Button color="success">Add Business</Button>
        </Form>
      </Container>
    )
  }
}

export default withRouter(NewBusinessForm)
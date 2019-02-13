import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from '../axios'

class AddBusinessForm extends Component {

  state = {
    city: "",
    buisnesses: [],
    buisness: "",
    picked: false
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }

  _cityClick = (e) => {
    e.preventDefault();
    this.setState({picked: true})
    axios.get(`/business/${this.state.city}`)
      .then(response => {
        this.setState({ buisnesses: response.data, buisness: response.data[0].name })
      })
  }

  _onSubmit = (e) => {
    e.preventDefault()
    let businessId = this.state.buisnesses.filter(business => business.name === this.state.buisness)[0].id
    this.props.addRoute({userId: this.props.user.id, businessId})
  }

  render() {

    if(!this.state.picked) {
      return (
        <Form onSubmit={this._cityClick}>
          <FormGroup>
            <Label for="city">What city is your workplace in?</Label>
            <Input onChange={this._onChange} value={this.state.city} type="text" name="city" placeholder="City" />
          </FormGroup>
          <Button color="success">Submit</Button>
        </Form>
      )
    }

    const options = this.state.buisnesses.map(business => <option key={business.id}> {business.name} </option>)
    return (
      <div>
        <Form onSubmit={this._onSubmit}>
          <FormGroup>
            <Label for="buisness">Select Business</Label>
            <Input onChange={this._onChange} type="select" name="business">
              {options}
            </Input>
          </FormGroup>
          <Button color="success">Submit</Button>
        </Form>
        <p>Don't see yours. Add it here.</p>
      </div>
    )
  }
}

export default AddBusinessForm
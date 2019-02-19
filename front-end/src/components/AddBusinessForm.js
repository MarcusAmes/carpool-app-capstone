import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from '../axios'
import NewBusinessContainer from '../containers/NewBusinessContainer';

class AddBusinessForm extends Component {

  state = {
    city: "",
    businesses: [],
    business: "",
    picked: false,
    noBusiness: false
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }

  _cityClick = (e) => {
    e.preventDefault();
    this.setState({picked: true})
    axios.get(`/business/${this.state.city}`)
      .then(response => {
        if(response.data.length) {
          this.setState({ businesses: response.data, business: response.data[0].name })
        } else {
          this.setState({noBusiness: true})
        }
      })
  }

  _onSubmit = (e) => {
    e.preventDefault() 
    let businessId = this.state.businesses.filter(business => business.name.trim() === this.state.business.trim())[0].id
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

    if(this.state.noBusiness) {
      return (
        <NewBusinessContainer />
      )
    }

    const options = this.state.businesses.map(business => <option key={business.id}> {business.name} </option>)
    return (
      <div>
        <Form onSubmit={this._onSubmit}>
          <FormGroup>
            <Label for="business">Select Business</Label>
            <Input onChange={this._onChange} type="select" name="business">
              {options}
            </Input>
          </FormGroup>
          <Button color="success">Submit</Button>
        </Form>
        <Button onClick={() => this.setState({noBusiness: true})}>Don't see yours. Add it here.</Button>
      </div>
    )
  }
}

export default AddBusinessForm
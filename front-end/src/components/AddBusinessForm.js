import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, Modal, ModalHeader, ModalFooter, Container } from 'reactstrap';
import axios from '../axios'
import NewBusinessContainer from '../containers/NewBusinessContainer';

class AddBusinessForm extends Component {

  state = {
    city: "",
    businesses: [],
    business: "",
    picked: false,
    noBusiness: false,
    modal: true
  }

  _onChange = ({target}) => {
    this.setState({[target.name]: target.value});
  }

  _cityClick = (e) => {
    e.preventDefault();
    if(this.state.city.length) {
      axios.get(`/business/${this.state.city}`, {
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      })
        .then(response => {
          if(response.data.length) {
            this.setState({picked: true, businesses: response.data, business: response.data[0].name })
          } else {
            this.setState({noBusiness: true})
          }
        })
    } else {
      this.setState({ noBusiness: true })
    } 
  }

  _onSubmit = (e) => {
    e.preventDefault() 
    let businessId = this.state.businesses.filter(business => business.name.trim() === this.state.business.trim())[0].id
    this.props.addRoute({userId: this.props.user.id, businessId})
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  noBusinessChange = () => {
    this.setState({noBusiness: !this.state.noBusiness})
  }

  resetCity = () => {
    this.setState({
      city: "",
      businesses: [],
      business: "",
      picked: false,
      noBusiness: false,
      modal: true
    })
  }

  render() {

    return (
      
      <div>
        <Button outline color="success" onClick={this.toggle}>Get Started</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          {this.state.noBusiness ? <NewBusinessContainer back={this.noBusinessChange} /> :
            !this.state.picked ?
              <Form onSubmit={this._cityClick}>
                <ModalHeader style={{borderBottom: "none"}} toggle={this.toggle}>What city is your workplace in?</ModalHeader> 
                <Container>
                  <Input onChange={this._onChange} value={this.state.city} type="text" name="city" placeholder="City" />
                </Container>
                
                <ModalFooter style={{ borderTop: "none" }}>
                  <Button color="success">Submit</Button>
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Form>
              :
              <div>
                <Form onSubmit={this._onSubmit}>
                  <ModalHeader style={{ borderBottom: "none" }} toggle={this.toggle}>Select your business.</ModalHeader>
                  <FormGroup>
                    <Container>                
                      <Input onChange={this._onChange} type="select" name="business">
                        {this.state.businesses.map(business => <option key={business.id}> {business.name} </option>)}
                      </Input>
                    </Container>
                  </FormGroup>
                  <ModalFooter style={{ borderTop: "none" }}>
                    <Button color="success">Submit</Button>
                    <Button color="secondary" onClick={this.resetCity}>Back</Button>
                  </ModalFooter>
                </Form>
                <Button outline color="dark" style={{marginBottom: "3%", marginLeft: "3%"}} onClick={() => this.setState({ noBusiness: true })}>Add business here</Button>
              </div>
            }
          
        </Modal>
      </div>
    )
  }
}

export default AddBusinessForm
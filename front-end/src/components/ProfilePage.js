import React, { Component } from 'react'
import axios from '../axios'

class ProfilePage extends Component {

  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    loading: true
  }

  componentDidMount() {
    
    axios.get(`/users/get/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        loading: false
      })
    })
  }

  render() {
    if(this.state.loading) {
      return (
        <p>Loading</p>
      )
    }
    return (
      <>
        {this.state.firstName}
      </>
    )
  }
}

export default ProfilePage
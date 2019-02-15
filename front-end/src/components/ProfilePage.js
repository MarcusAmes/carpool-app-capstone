import React, { Component } from 'react'

class ProfilePage extends Component {
  render() {
    
    return (
      <>
        {this.props.user && this.props.user.firstName}
      </>
    )
  }
}

export default ProfilePage
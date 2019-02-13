import React, { Component } from 'react'
import AddBusinessFormContainer from '../containers/AddBusinessFormContainer';

class HomePage extends Component {
  render() {

    if(!this.props.user.businessId) {
      return (
        <>
          <h2>Get started by adding your Workplace</h2>
          <AddBusinessFormContainer />
        </>
      )
    }
    
    return (
      <>
        
      </>
    )
  }
}

export default HomePage
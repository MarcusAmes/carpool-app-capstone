import { connect } from 'react-redux'
import NewBusinessForm from '../components/NewBusinessForm'
import { newBusiness } from '../actions/userActions';

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newBusiness: (business, userId, history) => {
      dispatch(
        newBusiness(business, userId, history)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBusinessForm)
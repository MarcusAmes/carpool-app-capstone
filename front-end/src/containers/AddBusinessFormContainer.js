import { connect } from 'react-redux'
import AddBusinessForm from '../components/AddBusinessForm'
import { addRoute } from '../actions/userActions';

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRoute: (user) => {
      dispatch(
        addRoute(user)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBusinessForm)
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/userActions';

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch (
        login(user)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
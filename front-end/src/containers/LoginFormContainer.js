import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/userActions';

const mapDispatchToProps = dispatch => {
  return {
    login: (user, history) => {
      dispatch (
        login(user, history)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
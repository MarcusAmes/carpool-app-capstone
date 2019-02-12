import { connect } from 'react-redux'
import TopNav from '../components/TopNav'
import { logout } from '../actions/userActions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(
        logout()
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(TopNav)
import { connect } from 'react-redux'
import TopNav from '../components/TopNav'
import { logout } from '../actions/userActions';
import { logoutC } from '../actions/connectionActions';

const mapStateToProps = ({user}) => {
  return {
    userId: user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(
        logout()
      )
      dispatch(
        logoutC()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
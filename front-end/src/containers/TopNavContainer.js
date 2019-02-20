import { connect } from 'react-redux'
import TopNav from '../components/TopNav'
import { logout, getUserFromToken } from '../actions/userActions';
import { logoutC } from '../actions/connectionActions';

const mapStateToProps = ({user}) => {
  return {
    user,
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
    },
    getUser: (token) => {
      dispatch (
        getUserFromToken(token)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
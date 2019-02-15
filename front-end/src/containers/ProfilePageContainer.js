import { connect } from 'react-redux'
import ProfilePage from '../components/ProfilePage'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(ProfilePage)
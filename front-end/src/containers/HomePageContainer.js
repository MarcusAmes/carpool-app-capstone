import { connect } from 'react-redux'
import HomePage from '../components/HomePage'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(HomePage)
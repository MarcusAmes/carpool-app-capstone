import { connect } from 'react-redux'
import MapPage from '../components/MapPage'
import { addDistance } from '../actions/connectionActions';

const mapStateToProps = ({ user, connection }) => {
  return {
    user,
    connections: connection.connections
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDistance: (id) => {
      dispatch(
        addDistance(id)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
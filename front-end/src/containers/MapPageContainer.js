import { connect } from 'react-redux'
import MapPage from '../components/MapPage'
import { addDistance, fetchConnections, disconnectConnection } from '../actions/connectionActions';
import { fetchUserConnection } from '../actions/userActions';

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
    },
    fetchUserConnections: (id) => {
      dispatch(
        fetchUserConnection(id)
      )
    },
    fetchConnections: (connections) => {
      dispatch(
        fetchConnections(connections)
      )
    },
    disconnect: (id) => {
      dispatch(
        disconnectConnection(id)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
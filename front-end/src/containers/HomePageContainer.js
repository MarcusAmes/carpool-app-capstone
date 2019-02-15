import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { fetchConnections } from '../actions/connectionActions';
import { fetchUserConnection } from '../actions/userActions';

const mapStateToProps = ({user, connection}) => {
  return {
    user,
    connections: connection.connections
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchConnections: (connections) => {
      dispatch (
        fetchConnections(connections)
      )
    },
    fetchUserConnections: (id) => {
      dispatch(
        fetchUserConnection(id)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
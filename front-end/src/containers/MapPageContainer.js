import { connect } from 'react-redux'
import MapPage from '../components/MapPage'
import { addDistance, fetchConnections, disconnectConnection, removeDate, sendMessage, removeMessage } from '../actions/connectionActions';
import { fetchUserConnection, getUserFromToken } from '../actions/userActions';

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
    },
    getUser: (token) => {
      dispatch(
        getUserFromToken(token)
      )
    },
    removeDate: (id, date) => {
      dispatch(
        removeDate(id, date)
      )
    },
    sendMessage: (id, message) => {
      dispatch(
        sendMessage(id, message)
      )
    },
    removeMessage: (id, date) => {
      dispatch(
        removeMessage(id, date)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
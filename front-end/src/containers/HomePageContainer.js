import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { fetchConnections } from '../actions/connectionActions';

const mapStateToProps = ({user, connection}) => {
  return {
    user,
    userConnections: user.connections.filter(()=>true),
    connections: connection.connections
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchConnections: (connections) => {
      dispatch (
        fetchConnections(connections)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
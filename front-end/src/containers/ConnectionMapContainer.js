import { connect } from 'react-redux'
import ConnectionMap from '../components/ConnectionMap'

const mapStateToProps = ({user, connection}) => {
  return {
    end: { lat: user.simplifiedRoute.end_location.lat, lng: user.simplifiedRoute.end_location.lng},
    connection: connection.connections.filter(connection => connection.user1Accept && connection.user2Accept)[0]
  }
}

export default connect(mapStateToProps)(ConnectionMap)
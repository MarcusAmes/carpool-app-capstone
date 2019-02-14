import { connect } from 'react-redux'
import ConnectCard from '../components/ConnectCard'
import { addConnection } from '../actions/connectionActions';

const mapStateToProps = ({user}) => {
  return {
    id: user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addConnection: (connectionId, userId) => {
      dispatch(
        addConnection(connectionId, userId)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectCard)
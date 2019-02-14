import { FETCH_CONNECTIONS_LOADING, FETCH_CONNECTIONS_ERROR, FETCH_CONNECTIONS_SUCCESS, ADD_CONNECTION_LOADING, ADD_CONNECTION_ERROR, ADD_CONNECTION_SUCCESS } from "../actions/connectionActions";

const initState = {
  connections: [],
  connectionsLoading: false,
  connectionsError: false
}

const connectionReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_CONNECTIONS_LOADING:
      return {
        ...state,
        connectionsLoading: true
      }
    case FETCH_CONNECTIONS_ERROR:
      return {
        ...state,
        connectionsLoading: false,
        connectionsError: true
      }
    case FETCH_CONNECTIONS_SUCCESS:
      return {
        ...state,
        connections: action.payload,
        connectionsLoading: false,
        connectionsError: false
      }
    case ADD_CONNECTION_LOADING:
      return {
        ...state,
        connectionsLoading: true
      }
    case ADD_CONNECTION_ERROR:
      return {
        ...state,
        connectionsLoading: false,
        connectionsError: true
      }
    case ADD_CONNECTION_SUCCESS:
      return {
        ...state,
        connections: state.connections.map(connection => connection.id === action.payload.id ? action.payload : connection),
        connectionsLoading: false,
        connectionsError: false
      } 
    default:
      return state
  }
}

export default connectionReducer
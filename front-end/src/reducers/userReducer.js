import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS, REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, LOGOUT_SUCCESS, ADD_ROUTE_LOADING, ADD_ROUTE_SUCCESS, ADD_ROUTE_ERROR, FETCH_USER_CONNECTIONS } from "../actions/userActions";

const initState = {
  id: "",
  email: "",
  businessId: "",
  address: "",
  lastName: "",
  firstName: "",
  simplifiedRoute: {},
  connections: [],
  userLoading: false,
  userError: false
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        userLoading: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        userError: true
      }
    case LOGIN_SUCCESS:
      return {
        id: action.payload.id,
        email: action.payload.email,
        businessId: action.payload.businessId,
        address: action.payload.address,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        simplifiedRoute: action.payload.simplifiedRoute,
        connections: action.payload.connections,
        userError: false,
        userLoading: false
      }
    case REGISTER_LOADING:
      return {
        ...state,
        userLoading: true
      }
    case REGISTER_ERROR: 
      return {
        ...state,
        userError: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        userError: false,
        userLoading: false
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        id: "",
        email: "",
        businessId: "",
        address: "",
        lastName: "",
        firstName: "",
        simplifiedRoute: {},
        connections: [],
        userLoading: false,
        userError: false
      }
    case ADD_ROUTE_LOADING:
      return {
        ...state,
        userLoading: true
      }
    case ADD_ROUTE_ERROR: 
      return {
        ...state,
        userError: true
      }
    case ADD_ROUTE_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        businessId: action.payload.businessId,
        address: action.payload.address,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        simplifiedRoute: action.payload.simplifiedRoute,
        connections: action.payload.connections,
        userError: false,
        userLoading: false
      }
    case FETCH_USER_CONNECTIONS:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        businessId: action.payload.businessId,
        address: action.payload.address,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        simplifiedRoute: action.payload.simplifiedRoute,
        connections: action.payload.connections,
        userError: false,
        userLoading: false
      }
    default:
      return state;
  }
}

export default userReducer;
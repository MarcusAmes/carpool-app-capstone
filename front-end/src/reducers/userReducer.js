import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from "../actions/userActions";

const initState = {
  id: "",
  email: "",
  businessId: "",
  route: {},
  address: "",
  lastName: "",
  firstName: "",
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
        route: action.payload.simplifiedRoute,
        address: action.payload.address,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userError: false,
        userLoading: false
      }
    default:
      return state;
  }
}

export default userReducer;
import axios from 'axios'
//ACTIONS

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

export const LOGIN_LOADING = "LOGIN_LOADING";
const loginLoading = () => ({ type: LOGIN_LOADING });

export const LOGIN_ERROR = "LOGIN_ERROR";
const loginError = () => ({ type: LOGIN_ERROR });

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const registerSuccess = () => ({ type: REGISTER_SUCCESS });

export const REGISTER_LOADING = "REGISTER_LOADING";
const registerLoading = () => ({ type: REGISTER_LOADING });

export const REGISTER_ERROR = "REGISTER_ERROR";
const registerError = () => ({ type: REGISTER_ERROR });

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })

export const ADD_ROUTE_SUCCESS = "ADD_ROUTE_SUCCESS";
const addRouteSuccess = (user) => ({ type: ADD_ROUTE_SUCCESS, payload: user });

export const ADD_ROUTE_LOADING = "ADD_ROUTE_LOADING";
const addRouteLoading = () => ({ type: ADD_ROUTE_LOADING });

export const ADD_ROUTE_ERROR = "ADD_ROUTE_ERROR";
const addRouteError = ( ) => ({ type: ADD_ROUTE_ERROR });

export const FETCH_USER_CONNECTIONS = "FETCH_USER_CONNECTIONS";
const fetchUserConnections = (user) => ({ type: FETCH_USER_CONNECTIONS, payload: user })

//THUNKS

const getConfig = () => ({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }
})

export const login = (user, history) => dispatch => {
  dispatch(
    loginLoading()
  )
  axios.post("/users/login", user, getConfig())
  .then(response => {
    dispatch(
      loginSuccess(response.data)
    )
    history.push("/cartool/home")
  })
  .catch(err => {
    dispatch(
      loginError(err)
    )
  })
}

export const register = (user, history) => dispatch => {
  dispatch(
    registerLoading()
  )
  axios.post("/users/register", user, getConfig())
    .then(response => {
      dispatch(
        registerSuccess(response.data)
      )
      history.push("/")
    })
    .catch(err => {
      dispatch(
        registerError(err)
      )
    })
}

export const logout = () => dispatch => {
  dispatch(
    logoutSuccess()
  )
}

export const addRoute = (user) => dispatch => {
  dispatch(
    addRouteLoading()
  )
  axios.post("/users/add/route", user, getConfig())
  .then(response => {
    dispatch(
      addRouteSuccess(response.data)
    )
  })
  .catch(err => {
    dispatch(
      addRouteError()
    )
  })
}

export const getUserFromToken = (token) => dispatch => {
  axios.get(`/users/token/${token}`, getConfig())
  .then(response => {
    dispatch(
      fetchUserConnections(response.data)
    )
  })
  .catch(err => {
    console.log(err)
  })
}

export const fetchUserConnection = (id) => dispatch => {
  axios.get(`/users/get/${id}`, getConfig())
  .then(response => {
    dispatch(
      fetchUserConnections(response.data)
    )
  })
}

export const newBusiness = (business, userId) => dispatch => {
  axios.post(`/business/add`, business, getConfig())
  .then(response => {
    console.log(response.data.id);
    console.log(userId);
    dispatch(
      addRoute({userId, businessId: response.data.id})
    )
  })
  .catch(err => {
    console.log(err);
  })
}



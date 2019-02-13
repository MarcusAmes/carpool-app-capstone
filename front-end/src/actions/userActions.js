import axios from '../axios'

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


//THUNKS

export const login = (user) => dispatch => {
  dispatch(
    loginLoading()
  )
  axios.post("/users/login", user)
  .then(response => {
    // localStorage.setItem({token: response.token})
    dispatch(
      loginSuccess(response.data)
    )
  })
  .catch(err => {
    dispatch(
      loginError(err)
    )
  })
}

export const register = user => dispatch => {
  dispatch(
    registerLoading()
  )
  axios.post("/users/register", user)
    .then(response => {
      dispatch(
        registerSuccess(response.data)
      )
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
  axios.post("/users/add/route", user)
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
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
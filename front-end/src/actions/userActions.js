import axios from '../axios'

//ACTIONS

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

export const LOGIN_LOADING = "LOGIN_LOADING";
const loginLoading = () => ({ type: LOGIN_LOADING });

export const LOGIN_ERROR = "LOGIN_ERROR";
const loginError = () => ({ type: LOGIN_ERROR });


//THUNKS

export const login = (user) => dispatch => {
  dispatch(
    loginLoading()
  )
  axios.post("/login", user)
  .then(response => {
    localStorage.setItem({token: response.token})
    dispatch(
      loginSuccess(response)
    )
  })
  .catch(err => {
    dispatch(
      loginError(err)
    )
  })
  
}
import axios from 'axios'
//ACTIONS

export const FETCH_CONNECTIONS_SUCCESS = "FETCH_CONNECTIONS_SUCCESS"
const fetchConnectionsSuccess = (connections) => ({ type: FETCH_CONNECTIONS_SUCCESS, payload: connections })

export const FETCH_CONNECTIONS_LOADING = "FETCH_CONNECTIONS_LOADING"
const fetchConnectionsLoading= () => ({ type: FETCH_CONNECTIONS_LOADING })

export const FETCH_CONNECTIONS_ERROR = "FETCH_CONNECTIONS_ERROR"
const fetchConnectionsError = () => ({ type: FETCH_CONNECTIONS_ERROR })

export const ADD_CONNECTION_SUCCESS = "ADD_CONNECTION_SUCCESS";
const addConnectionSuccess = (user) => ({ type: ADD_CONNECTION_SUCCESS, payload: user });

export const ADD_CONNECTION_LOADING = "ADD_CONNECTION_LOADING";
const addConnectionLoading = () => ({ type: ADD_CONNECTION_LOADING });

export const ADD_CONNECTION_ERROR = "ADD_CONNECTION_ERROR";
const addConnectionError = () => ({ type: ADD_CONNECTION_ERROR });

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })

export const ADD_DISTANCE_SUCCESS = "ADD_DISTANCE_SUCCESS"
const addDistanceSuccess = (connection) => ({ type: ADD_DISTANCE_SUCCESS, payload: connection })

export const REMOVE_CONNECTION_SUCCESS = "REMOVE_CONNECTION_SUCCESS";
const removeConnectionSuccess = (connection) => ({ type: REMOVE_CONNECTION_SUCCESS, payload: connection })

export const REMOVE_DATE_SUCCESS = "REMOVE_DATE_SUCCESS";
const removeDateSuccess = (connection) => ({ type: REMOVE_DATE_SUCCESS, payload: connection })

export const ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS"
const addMessageSuccess = (connection) => ({ type: ADD_MESSAGE_SUCCESS, payload: connection })

export const REMOVE_MESSAGE_SUCCESS = "REMOVE_MESSAGE_SUCCESS";
const removeMessageSuccess = (connection) => ({ type: REMOVE_MESSAGE_SUCCESS, payload: connection })


//THUNKS

const getConfig = () => ({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }
})

export const fetchConnections = (connections) => dispatch => {
  dispatch(
    fetchConnectionsLoading()
  )
  axios.post("/connections/receive", connections, getConfig())
    .then(response => {
      dispatch(
        fetchConnectionsSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        fetchConnectionsError(err)
      )
    })
}

export const addConnection = (connectionId, userId) => dispatch => {
  dispatch(
    addConnectionLoading()
  )
  axios.get(`/users/connect/${connectionId}/${userId}`, getConfig())
    .then(response => {
      dispatch(
        addConnectionSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        addConnectionError()
      )
    })
}

export const logoutC = () => dispatch => {
  dispatch(
    logoutSuccess()
  )
}

export const addDistance = (id) => dispatch => {
  axios.get(`/connections/add/${id}`, getConfig())
  .then(response => {
    dispatch(
      addDistanceSuccess(response.data)
    )
  })
  .catch(err => {
    console.log(err)
  })
}

export const disconnectConnection = (id) => dispatch => {
  axios.get(`/connections/remove/${id}`, getConfig())
  .then(response => {
    dispatch(
      removeConnectionSuccess(response.data)
    )
  })
  .catch(err => {
    console.log(err)
  })
}

export const removeDate = (id, date) => dispatch => {
  axios.get(`/connections/remove/date/${id}/${date}`, getConfig())
    .then(response => {
      dispatch(
        removeDateSuccess(response.data)
      )
    })
    .catch(err => {
      console.log(err)
    })
}

export const sendMessage = (id, message) => dispatch => {
  axios.post(`/connections/add/message/${id}`, message, getConfig())
    .then(response => {
      dispatch(
        addMessageSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        console.log(err)
      )
    })
}

export const removeMessage = (id, date) => dispatch => {
  axios.get(`/connections/remove/message/${id}/${date}`, getConfig())
    .then(response => {
      dispatch(
        removeMessageSuccess(response.data)
      )
    })
    .catch(err => {
      console.log(err)
    })
}
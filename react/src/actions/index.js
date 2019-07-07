import * as types from '../constants/ActionTypes'

let nextUserId = 0

export const addMessage = (message) => ({
    type: types.ADD_MESSAGE,
    message
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

export const addName = user => ({
    type: types.ADD_NAME,
    user
})

export const messageReceived = (message, author) =>({
    type: types.MESSAGE_RECEIVED,
    id: nextUserId++,
    message,
    author
})

export const populateUsersList = users =>({
    type: types.USERS_LIST,
    id: nextUserId++,
    users
})

export const connect = (message) =>({
    type: types.CONNECT,
    message
})

export const disconnect = (message) =>({
    type: types.DISCONNECT,
    message
})

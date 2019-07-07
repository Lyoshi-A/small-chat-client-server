import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import { currentUser } from '../sockets'

const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.message.from = currentUser
        params.socket.send(action.message)
    })
}

export default handleNewMessage
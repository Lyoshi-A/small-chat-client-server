import * as types from '../constants/ActionTypes'

const events = (state = [], action) => {
    switch (action.type) {
        case types.CONNECT:
            return state;
        case types.DISCONNECT:
            return state;
        case types.ADD_NAME:
            return action.user.name;
        default: return state
    }
}

export default events
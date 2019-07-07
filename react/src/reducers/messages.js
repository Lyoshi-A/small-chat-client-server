import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
    switch (action.type) {
        // case types.ADD_MESSAGE:
        //     console.log('types.ADD_MESSAGE', action);
        case types.MESSAGE_RECEIVED:
            const d = new Date();
            return state.concat([
                {
                   message: action.message.content||null,
                   time: action.message.time||null,
                   name: action.message.from.name,
                   action: action.message.action===0?action.message.action:null,
                   id: d.getTime()
                }
            ]);
        default: return state
    }
}

export default messages
import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
    switch (action.type) {
        case types.ADD_USER:
            return state.concat([
            {
               name: action.name,
               id: action.id 
            }
        ])
        case types.USERS_LIST:
            const users = [];
            for (let conn in action.users)
                users.push(action.users[conn]);
            users.sort((a,b)=>a.name<b.name?-1:1);
           return users
        default: return state
    }
}

export default users
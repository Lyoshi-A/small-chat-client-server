import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import event from './events'
 
const chat = combineReducers({
    messages,
    users,
    event
})

export default chat
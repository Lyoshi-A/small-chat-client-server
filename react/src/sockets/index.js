//import * as types from '../constants/ActionTypes'
import { connect, disconnect, messageReceived, populateUsersList } from '../actions'

import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';
const AVATAR_URL = 'https://api.adorable.io/avatars/50';

const getRandomId = () => {
    return Math.floor(Math.random() * (1000000)) + 1;
}

const initUser = (username) => {
    const randomId = getRandomId();
    return {
            id: randomId,
            avatar: `${AVATAR_URL}/${randomId}.png`,
            name: username
        }
}
export let currentUser = {};

const setupSockets = (dispatch, username) => {

    const socket = io(SERVER_URL);
    socket.on('message', (data) => {
        dispatch(messageReceived(data));
    });
    socket.on('list', (data) => dispatch(populateUsersList(data)));
    socket.on('connect', (data) => {
        currentUser = initUser(username);
        socket.emit('message', {from: initUser(username),action:0});
        dispatch(connect(username));
    });
    socket.on('disconnect', () => dispatch(disconnect('disconnect')));

    return socket
}
export default setupSockets
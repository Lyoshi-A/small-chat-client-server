import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import setupSockets from './sockets'
import reducers from './reducers'
import handleNewMessage from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware)) 

const socket = setupSockets(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

//store.dispatch(addUser('Me'))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister();
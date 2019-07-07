import React from 'react';
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import './Message.css';

const Message = ({message, name, time, action}) => {
    const line = (action === null)?<p>
        <span>({time})</span>
        <span className="chat-message-user">{name}:</span>
        <span> {message} </span>
    </p>:<p className="chat-notification">
        <span> <b>{name}</b> joined to the conversation. </span>
    </p>
    return <ListItem alignItems="flex-start" className="chat-item-list">{line}</ListItem>
}

Message.propTypes = {
   name: PropTypes.string.isRequired,
   time: PropTypes.string,
   message: PropTypes.string
}

export default Message
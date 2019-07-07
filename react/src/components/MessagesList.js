import React from 'react';
import PropTypes from 'prop-types'
import Message from './Message'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import './MessagesList.css';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const MessagesList = ({messages}) => {
    const classes = useStyles();
    return (
        <section className="chat-list">
            <List className={classes.root}>
                {messages.map(message => {
                    return <Message key={message.id} {...message} />
                 })}
            </List>
        </section>
    )
}


MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            time: PropTypes.string,
            message: PropTypes.string,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
 }
 
 export default MessagesList
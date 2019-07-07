import React from 'react';
import PropTypes from 'prop-types'
import { currentUser } from '../sockets'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MessageRounded from '@material-ui/icons/MessageRounded';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '98%'
    },
}));

const AddMessage = (props) => {
    const classes = useStyles();

    const sendMessage = (text) => {
        const d = new Date();
        let hr = (d.getHours() < 10)?`0${d.getHours()}`:d.getHours();
        let min = (d.getMinutes() < 10)?`0${d.getMinutes()}`:d.getMinutes();
        const message = {
            id: d.getTime(),
            content: text,
            time: `${hr}:${min}`,
            from: currentUser
        }
        props.dispatch(message)
    }

    const keyPress = (e) => {
        if (e.key === 'Enter') {
           sendMessage(e.target.value);
           e.target.value = '';
        }
    }

    return (
        <section className="chat-footer-container">
            <TextField
                id="addMessage"
                label="Message"
                autoComplete="off"
                onKeyPress={keyPress}
                className={classes.textField}
                margin="normal"
                value={props.message}
                InputProps={{
                startAdornment: (
                        <InputAdornment position="start">
                            <MessageRounded />
                        </InputAdornment>
                    ),
                }}
            />
        </section>
    )
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage
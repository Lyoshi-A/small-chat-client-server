import React from 'react';
import PropTypes from 'prop-types'
import './Sidebar.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Sidebar = (props) => {
    const handleClick = (user) => (e)=> {
        document.getElementById('addMessage').value += `@${user.name}`;
    }
    return (
        <aside className="list-container">
            {props.users.map(user => (
                <ListItem alignItems="flex-start" key={user.id} onClick={handleClick(user)} className="item-list">
                    <ListItemAvatar>
                        <Avatar alt={user.name} src={user.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={user.name} />
                </ListItem>
            ))}
        </aside>
    )
}


Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
    // dispatch: PropTypes.func.isRequired
 }
 
 export default Sidebar
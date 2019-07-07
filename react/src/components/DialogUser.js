import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DialogUser = (props) => {
    let previousUsername;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        previousUsername = params.username ? params.username : undefined;
    }

    const  onSave = () => {
        setOpen(false);
        // {
        //     username: this.params.username,
        //     dialogType: this.params.dialogType,
        //     previousUsername: this.previousUsername
        // }
    }

    return (
        <div>
            <Dialog open={open} onClose={onSave} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" mat-dialog-close onClick={onSave}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

DialogUser.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage
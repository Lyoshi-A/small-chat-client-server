import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage'
import {addMessage} from '../actions'


// function mapStateToProps(state) {
//     console.log('AddMessag mapStateToProps', state)
//     return {
//         message: state.message
//     }
// }

const mapDispatchToProps = dispatch => ({
    dispatch : (message, author) => {
        dispatch(addMessage(message, author))
    }
})
export const AddMessage = connect(()=>({}), mapDispatchToProps)(AddMessageComponent)
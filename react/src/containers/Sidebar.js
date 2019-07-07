import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar'
//import {addName} from "../actions";

// const mapDispatchToProps = dispatch => ({
//     dispatch : (user) => {
//         dispatch(addName(user))
//     }
// })

export const Sidebar = connect(state => ({
    users: state.users
}),{})(SidebarComponent)

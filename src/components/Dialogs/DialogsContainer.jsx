import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = connect(mapStateToProps, {addMessage,updateNewMessage})(Dialogs)

export default DialogsContainer

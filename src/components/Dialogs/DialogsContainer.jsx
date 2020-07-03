import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {


    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage

            let addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            let messageChange = (text) => {
                store.dispatch(updateNewMessageActionCreator(text))
            }
            return <Dialogs dialogsPage={state}
                            addMessage={addMessage}
                            messageChange={messageChange}
            />
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer
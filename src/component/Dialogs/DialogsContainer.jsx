import React from 'react';
import s from './Dialogs.module.css'

import DialogsItem from './../Dialogs/DialogsItem/DialogsItem';
import Messages from './../Dialogs/Messages/Messages';
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from './../../StoreContext';


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        { store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageBodyCreator())
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
           return  <Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={store.getState().dialogsPage}/>
        }
    }

    </StoreContext.Consumer>
}

export default DialogsContainer
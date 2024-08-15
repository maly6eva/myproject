import React from 'react';
import s from './Dialogs.module.css'

import DialogsItem from './../Dialogs/DialogsItem/DialogsItem';
import Messages from './../Dialogs/Messages/Messages';
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer= (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageBodyCreator())

    }
    let onNewMessageChange = (body) => {
        props.store.dispatch( updateNewMessageBodyCreator(body))
    }


    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={ onSendMessageClick } dialogsPage={state}/>
}

export default DialogsContainer
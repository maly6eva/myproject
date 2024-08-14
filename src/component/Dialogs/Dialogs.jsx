import React from 'react';
import s from './Dialogs.module.css'

import DialogsItem from './../Dialogs/DialogsItem/DialogsItem';
import Messages from './../Dialogs/Messages/Messages';
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redax/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = state.messagesData.map(m => <Messages messages={m.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageBodyCreator())

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch( updateNewMessageBodyCreator(body))
    }


    return <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
            <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='eee kseniadimkavalerka' name="" id="" cols="30" rows="10"></textarea></div>
                <div><button onClick={onSendMessageClick } className={s.button}>Спросить!</button></div>
            </div>
        </div>
}

export default Dialogs
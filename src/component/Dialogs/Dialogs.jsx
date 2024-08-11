import React from 'react';
import s from './Dialogs.module.css'

import DialogsItem from './../Dialogs/DialogsItem/DialogsItem';
import Messages from './../Dialogs/Messages/Messages';


const Dialogs = (props) => {
    let myP = React.createRef()

    let l = () => {
       let t = myP.current.value
       alert(t)
    }

    let dialogsElements =
        props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)


    let messagesElements =
        props.state.messagesData.map(m => <Messages messages={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={myP} name="" id="" cols="30" rows="10"></textarea>
                <button  onClick={l} className={s.button}>Спросить!</button>
            </div>
        </div>

    )
}
export default Dialogs
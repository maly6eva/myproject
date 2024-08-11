import React from 'react';
import s from './../Dialogs.module.css'


const Messages = (props) => {
    return <div className={s.dialog}>{props.messages}</div>


}
export default Messages
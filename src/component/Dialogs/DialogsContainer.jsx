import React from 'react';
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

import {connect} from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageBodyCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}


const DialogsContainer = connect()(Dialogs)

export default DialogsContainer
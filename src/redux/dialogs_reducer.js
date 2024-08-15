const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What?'},
    ],
        dialogs: [
    {id: 1, name: 'Dimka'},
    {id: 2, name: 'Dianka'},
    {id: 3, name: 'Timur'},
    {id: 4, name: 'Alesya'},
    {id: 5, name: 'Nikita'},
],
    newMessageBody: ''
}



const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, name: body});
            return state;
        default:
            return state;
    }
}


export const sendMessageBodyCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;
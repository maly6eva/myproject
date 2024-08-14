import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', name: 'Kolya', likecount: '17'},
                {id: 2, message: 'What are you?', name: 'Lena', likecount: '20'},
                {id: 3, message: 'oro?', name: 'Misha', likecount: '177'},
                {id: 2, message: 'What are you?', name: 'Katya', likecount: '200'}
            ],
            newPostText: 'Dimka'
        },
        dialogsPage: {
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
    },
    _callSubscriber(){
        console.log('GiFi')
    },


    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer

    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;

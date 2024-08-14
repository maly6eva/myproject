const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }else if (action.type === 'UPDATE_NEW_MESSAGE_BODY'){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        }else if (action.type === 'SEND_MESSAGE'){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, name: body});
            this._callSubscriber(this._state)
        }
    }
}



export const addPostActionCreator = () => ({type: "ADD-POST"})
export const updateNewPostActionCreator = (text) =>
    ({ type: 'UPDATE_NEW_POST_TEXT', newText: text })


export const sendMessageBodyCreator = () => ({type: "SEND_MESSAGE"})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })



export default store;
window.store = store;

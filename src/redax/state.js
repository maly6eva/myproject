import {logDOM} from "@testing-library/react";
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
            ]
        }
    },
    getState() {
        debugger
        return this._state;
    },
     _callSubscriber(){
        console.log('GiFi')
    },
    addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)

    },
     updateNewPostText(newText){
         this._state.profilePage.newPostText = newText;
         this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber = observer

    }
}


export default store;
window.store = store;

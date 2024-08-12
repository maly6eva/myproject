import Post from "../component/Profile/MyPosts/Post/Post";
import { rerenderEntireTree } from "../render";

let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)

}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export default state;
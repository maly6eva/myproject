import Post from "../component/Profile/MyPosts/Post/Post";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', name: 'Kolya', likecount: '17'},
            {id: 2, message: 'What are you?', name: 'Lena', likecount: '20'},
            {id: 3, message: 'oro?', name: 'Misha', likecount: '177'},
            {id: 2, message: 'What are you?', name: 'Katya', likecount: '200'}
        ]

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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
}



export default state;
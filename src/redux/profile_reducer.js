const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', name: 'Kolya', likecount: '17'},
        {id: 2, message: 'What are you?', name: 'Lena', likecount: '20'},
        {id: 3, message: 'oro?', name: 'Misha', likecount: '177'},
        {id: 2, message: 'What are you?', name: 'Katya', likecount: '200'}
    ],
    newPostText: 'Dimka'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state

    }
}


export const addPostActionCreator = () => ({type: ADD_POST })
export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer;
import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile_reducer";
import StoreContext from './../../../../StoreContext'

const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = props.store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
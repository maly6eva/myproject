import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = (props) => {
    let pestElement =
        props.posts.map(p =>  <Post message={p.message} name={p.name} likecount={p.likecount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }



    return <div className={s.postBlosk}>
           <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {pestElement}
        </div>
    </div>

}
export default MyPosts;
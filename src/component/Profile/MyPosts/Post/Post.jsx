import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.item}>
                <img
                    src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
                    alt=""/>
                {props.message}
                <div>
                    <span>like</span>
                    {props.likecount}
                </div>
                {props.name}
            </div>
    )
}
export default Post
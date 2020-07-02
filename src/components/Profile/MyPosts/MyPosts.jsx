import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(el => (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))

    let addPost = () => {
        props.dispatch({type: ADD_POST})
    }

    let onPostChange = (event) => {
        let text = event.target.value
        props.dispatch({
            type: UPDATE_NEW_POST_TEXT,
            newText: text
        })
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
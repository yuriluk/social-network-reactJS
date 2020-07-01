import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(el => (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))

    let addPost = () => {
        props.addPost(props.newPostText)
    }

    let onPostChange = (event) => {
        let newMessage = event.target.value
        props.handleMessageChange(newMessage)
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
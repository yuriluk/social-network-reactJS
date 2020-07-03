import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts
        .map(el => (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (event) => {
        let text = event.target.value
        props.updateNewPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
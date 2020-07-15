import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts
        .map(el => (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))

    const onSubmit = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostBody' component='textarea' placeholder='Enter your post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    // a unique name for the form
    form: 'profileAddNewPostForm'
})(AddPostForm)

export default MyPosts
import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";

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

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostBody'
                       component={TextArea}
                       placeholder='Enter your post'
                       validate={[required, maxLength10]}
                />
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
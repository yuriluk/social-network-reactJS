import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";

window.props = []

class MyPosts extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state
    }

    render() {
        console.log("render YO")
        window.props.push(this.props)

        console.log(this.props)

        let postsElements = this.props.posts
            .map(el => (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))

        const onSubmit = (values) => {
            this.props.addPost(values.newPostBody)
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

const AddPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddPostForm)

export default MyPosts
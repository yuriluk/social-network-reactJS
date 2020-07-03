import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let postChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 updateNewPost={postChange}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer
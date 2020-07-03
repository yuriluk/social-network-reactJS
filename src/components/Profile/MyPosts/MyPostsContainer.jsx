import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let postChange = (text) => {
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts posts={state.profilePage.posts}
                                updateNewPost={postChange}
                                addPost={addPost}
                                newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer
import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     handleMessageChange={props.handleMessageChange}
                     newPostText={props.state.newPostText}
            />
        </>
    )
}

export default Profile
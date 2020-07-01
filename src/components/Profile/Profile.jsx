import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}
            />
        </>
    )
}

export default Profile
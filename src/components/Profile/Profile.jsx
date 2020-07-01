import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let posts = [
        {id:1, message:'First post' , likesCount:15},
        {id:2, message:'Second post' , likesCount:17},
        {id:3, message:'Third post' , likesCount:3},
        {id:4, message:'Forth post' , likesCount:5},
        {id:5, message:'Fifth post' , likesCount:85},
        {id:6, message:'Sixth post' , likesCount:75},
    ]

    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </>
    )
}

export default Profile
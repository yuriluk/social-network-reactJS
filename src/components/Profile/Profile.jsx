import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://wallpapercave.com/wp/P42nRq2.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile
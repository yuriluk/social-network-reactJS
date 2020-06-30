import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="20" rows="1"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'First post'} likesCount={15}/>
                <Post message={'Second post'} likesCount={3}/>
                <Post message={'Third post'} likesCount={7}/>
                <Post message={'Forth post'} likesCount={5}/>
                <Post message={'Fifth post'} likesCount={85}/>
                <Post message={'Sixth post'} likesCount={45}/>
            </div>
        </div>
    )
}

export default MyPosts
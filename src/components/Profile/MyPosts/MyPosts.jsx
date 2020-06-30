import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, message:'First post' , likesCount:15},
        {id:2, message:'Second post' , likesCount:17},
        {id:3, message:'Third post' , likesCount:3},
        {id:4, message:'Forth post' , likesCount:5},
        {id:5, message:'Fifth post' , likesCount:85},
        {id:6, message:'Sixth post' , likesCount:75},
    ]

    let postsElements = posts
        .map(el => (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="20" rows="1"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
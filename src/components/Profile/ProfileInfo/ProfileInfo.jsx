import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://wallpapercave.com/wp/P42nRq2.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </>
    )
}

export default ProfileInfo
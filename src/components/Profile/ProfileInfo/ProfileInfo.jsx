import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div>
                <img src="https://wallpapercave.com/wp/P42nRq2.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div>
                    <p>{props.profile.fullName}</p>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo
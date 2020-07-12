import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status}/>
            </div>
            <div>
                <p>Full name: {props.profile.fullName}</p>
                <p>About me: {props.profile.aboutMe}</p>
                <p></p>
                <p>Facebook: {props.profile.contacts.facebook}</p>
                <p>GitHub: {props.profile.contacts.github}</p>
                <p>Instagram: {props.profile.contacts.instagram}</p>
                <p>Twitter: {props.profile.contacts.twitter}</p>
                <p>Main Link: {props.profile.contacts.mainLink}</p>
                <p>Vk: {props.profile.contacts.vk}</p>
                <p>Website: {props.profile.contacts.website}</p>
                <p>Youtube: {props.profile.contacts.youtube}</p>
                <p></p>
                <p>LookingForAJob: {props.profile.lookingForAJob ? 'YES' : 'NO'}</p>
                <p>LookingForAJobDescription: {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default ProfileInfo
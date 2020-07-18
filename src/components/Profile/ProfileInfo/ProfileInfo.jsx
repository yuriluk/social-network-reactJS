import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userAva from "../../../assets/img/avaSmall.jpg";


const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={profile.photos.large ? profile.photos.large : userAva}
                     alt={profile.fullName}
                     className={s.userPhoto}/>
                <ProfileStatusWithHook status={status}
                                       updateUserStatus={updateUserStatus}/>
            </div>
            <div>
                <p>Full name: {profile.fullName}</p>
                <p>About me: {profile.aboutMe}</p>
                <p></p>
                <p>Facebook: {profile.contacts.facebook}</p>
                <p>GitHub: {profile.contacts.github}</p>
                <p>Instagram: {profile.contacts.instagram}</p>
                <p>Twitter: {profile.contacts.twitter}</p>
                <p>Main Link: {profile.contacts.mainLink}</p>
                <p>Vk: {profile.contacts.vk}</p>
                <p>Website: {profile.contacts.website}</p>
                <p>Youtube: {profile.contacts.youtube}</p>
                <p></p>
                <p>LookingForAJob: {profile.lookingForAJob ? 'YES' : 'NO'}</p>
                <p>LookingForAJobDescription: {profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default ProfileInfo

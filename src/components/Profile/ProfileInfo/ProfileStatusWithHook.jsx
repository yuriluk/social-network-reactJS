import React, {useState} from "react";


const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
            <div>
                <p>My status: <span onDoubleClick={activateEditMode}>{props.status || 'Unknown'}</span>
                </p>
            </div>
            }
            {editMode &&
            <div>
                <p>My status:
                    <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}
                           onChange={onStatusChange}/>
                </p>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHook

import React from 'react'
import s from './Users.module.css'
import User from "./User";

const Users = (props) => {

    if (props.users.length===0){
        props.setUsers([
                {
                    id: 1,
                    followed: true,
                    name: 'Dima K',
                    location: {country: 'Belarus', city: 'Minsk'},
                    status: 'I am looking for..',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdySYlAXXCTnIrakLSCAEla6tgutvAOvpjcg&usqp=CAU'
                },
                {
                    id: 2,
                    followed: false,
                    name: 'Tima Z',
                    location: {country: 'Ukraine', city: 'Kiev'},
                    status: 'Love burgers.',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdySYlAXXCTnIrakLSCAEla6tgutvAOvpjcg&usqp=CAU'
                },
                {
                    id: 3, followed: true, name: 'Sveta L', location: {country: 'Russia', city: 'Moscow'}, status: 'I am fun',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdySYlAXXCTnIrakLSCAEla6tgutvAOvpjcg&usqp=CAU'
                },
                {
                    id: 4, followed: false, name: 'Andy T', location: {country: 'Kongo', city: 'Golpo'}, status: 'I am tempo',
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdySYlAXXCTnIrakLSCAEla6tgutvAOvpjcg&usqp=CAU'
                },
            ]
        )
    }

    let users = props.users.map(user =>
        <User key={user.id} user={user}
              follow={props.follow}
              unfollow={props.unfollow}/>
    )
    return (
        <div className={s.users}>
            {users}
        </div>
    )
}

export default Users
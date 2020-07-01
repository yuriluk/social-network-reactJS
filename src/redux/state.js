import {rerenderEntireTree} from "./render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'First post', likesCount: 15},
            {id: 2, message: 'Second post', likesCount: 17},
            {id: 3, message: 'Third post', likesCount: 3},
            {id: 4, message: 'Forth post', likesCount: 5},
            {id: 5, message: 'Fifth post', likesCount: 85},
            {id: 6, message: 'Sixth post', likesCount: 75}
        ],
        newPostText: ''
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Ha-Ha'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Roma'}
        ],
    },
    sideBar: {
        friends: [
            {
                id: 1,
                name: 'Dima'
            },
            {
                id: 2,
                name: 'Olga'
            },
            {
                id: 4,
                name: 'Victor'
            }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {id: 10, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let handleMessageChange = (newPostText) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export default state






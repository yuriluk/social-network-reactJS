const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let store = {
    _state: {
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
            newMessageText: '',
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
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addMessage() {
        let newPost = {
            id: 10,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newPost)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 10,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 10,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

window.store = store

export default store;

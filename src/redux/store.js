import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Roma'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Ha-Ha'}
            ],
            newMessageText: '',
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)
    }
}


window.store = store

export default store;

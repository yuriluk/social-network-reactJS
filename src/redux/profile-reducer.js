const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'First post', likesCount: 15},
        {id: 2, message: 'Second post', likesCount: 17},
        {id: 3, message: 'Third post', likesCount: 3},
        {id: 4, message: 'Forth post', likesCount: 5},
        {id: 5, message: 'Fifth post', likesCount: 85},
        {id: 6, message: 'Sixth post', likesCount: 75}
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [
                    ...state.posts,
                    newPost
                ]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer

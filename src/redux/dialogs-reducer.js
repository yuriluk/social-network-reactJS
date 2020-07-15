const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = {
                id: 10,
                message: action.newMessageBody
            }

            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage
                ]
            }
        }
        default:
            return state
    }
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer


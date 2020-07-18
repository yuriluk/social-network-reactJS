let initialState = {
    friends: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Olga'},
        {id: 4, name: 'Victor'}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sidebarReducer

import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'First post', likesCount: 15},
        {id: 2, message: 'Second post', likesCount: 17},
        {id: 3, message: 'Third post', likesCount: 3},
        {id: 4, message: 'Forth post', likesCount: 5},
        {id: 5, message: 'Fifth post', likesCount: 85},
        {id: 6, message: 'Sixth post', likesCount: 75}
    ]
}

it('length of posts should be incremented ', () => {
    // 1. test data
    let action = addPost('newPost')

    // 2.action
    let newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts.length).toBe(7)
});

it('message  of posts should be newPost ', () => {
    // 1. test data
    let action = addPost('newPost')

    // 2.action
    let newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts[6].message).toBe('newPost')
});



it('likes count of added post should be 0 ', () => {
    // 1. test data
    let action = addPost('newPost')

    // 2.action
    let newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts[6].likesCount).toBe(0)
});


it('length of posts should be decremented after deleting', () => {
    // 1. test data
    let action = deletePost(1)

    // 2.action
    let newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts.length).toBe(5)
});


it("length of posts shouldn`t decrement if id incorrect", () => {
    // 1. test data
    let action = deletePost(1000)

    // 2.action
    let newState = profileReducer(state, action)

    //3. Expectation
    expect(newState.posts.length).toBe(6)
});

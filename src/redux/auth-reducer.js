import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samuraiNetwork/auth/SET_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, login, email, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (response.resultCode === 10) {
        let message = 'You need enter captcha'
        dispatch(stopSubmit("login", {_error: message}))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {_error: message}))
    }

}

export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer

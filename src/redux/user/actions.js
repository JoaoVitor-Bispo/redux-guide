import userActionTypes from "./action-types"

export const loginUser = (payload) => {
    return {
        type: userActionTypes.login,
        payload
    }
}

export const logoutUser = (payload) => {
    return {
        type: userActionTypes.logout,
        payload
    }
}
import userActionTypes from "./action-types"

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    if(action.type == userActionTypes.login) return {...state, currentUser: action.payload}
    if(action.type == userActionTypes.logout) return {...state, currentUser: action.payload}
    return state
}

export default userReducer
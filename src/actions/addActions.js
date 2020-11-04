import { addConstants } from "./constant"

export const Add = (userData) => {

    return async (dispatch) => {
        dispatch({
            type: addConstants.Add_REQUEST,
            payload: { userData }
        })
    }
}
export const deleteIndex = (userID) => {


    return async (dispatch) => {
        dispatch({
            type: addConstants.DELETE_REQUEST,
            payload: { userID }
        })
    }
}

export const updateIndex = (user, userID) => {


    return async (dispatch) => {
        dispatch({
            type: addConstants.UPDATE_REQUEST,
            payload: { user, userID }
        })
    }
}
import { addConstants } from "../actions/constant";

const initState = {

    users: [],
    user: {},
    loading: false,
    edit: false

}

export default (state = initState, action) => {

    console.log(action)
    switch (action.type) {
        case addConstants.Add_REQUEST:

            state = {

                users: state.users.concat(action.payload.userData),
                loading: true
            }
            break;
        case addConstants.DELETE_REQUEST:
            let us = state.users.indexOf(action.payload.userID);
            if (us > -1) {
                state.users.splice(us, 1);
            }

            let userr = state.user
            if (state.users.length > 0) {
                return {
                    ...state,
                };
            } else {
                state.loading = false;
                return {
                    ...state,

                };
            }
            break;
        case addConstants.UPDATE_REQUEST:

            const index = state.users.findIndex(user => user.id !== action.payload.userID);
            const newArray = [...state.users];

            newArray[index].firstName = action.payload.user.firstName;
            newArray[index].lastName = action.payload.user.lastName;
            newArray[index].email = action.payload.user.email;
            newArray[index].phone = action.payload.user.phone;
            return {
                ...state,
                users: newArray,
            }

            break;

        case addConstants.ADD_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false

            }
            break;
    }
    return state;
}
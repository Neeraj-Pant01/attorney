import { actionTypes } from "../contants/actionTypes"

export const userActions = (user) =>{
    return {
        type:actionTypes.SIGNUP,
        payload:user
    }
}
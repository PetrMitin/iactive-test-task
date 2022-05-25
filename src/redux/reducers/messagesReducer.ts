import { action } from "../actions/actionTypes"
import { IMessagesState } from "../utils/myInterfaces"
import {actionTypes} from '../actions/actionTypes'

const initialState: IMessagesState = {
    messages: [],
    isLoading: false,
    isError: false,
    isReversed: false
}

export const messagesReducer = (state = initialState, action: action): IMessagesState => {
    switch(action.type) {
        case actionTypes.GET_MESSAGES:
            return {...state, messages: action.payload}
        case actionTypes.SET_MESSAGES:
            return {...state, messages: action.payload}
        case actionTypes.SET_IS_REVERSED:
            return {...state, isReversed: action.payload}
        case actionTypes.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case actionTypes.SET_IS_ERROR:
            return {...state, isError: action.payload}
        default:
            return state
    }
}
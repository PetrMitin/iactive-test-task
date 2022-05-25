import { IMessage } from "../utils/myInterfaces"

export enum actionTypes {
    GET_MESSAGES = 'GET_MESSAGES',
    SET_MESSAGES = 'SET_MESSAGES',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_IS_ERROR = 'SET_IS_ERROR',
    SET_IS_REVERSED = 'SET_IS_REVERSED'
}

interface IAction {
    type: actionTypes,
    payload: any
}

export interface IGetMessagesAction extends IAction {
    type: actionTypes.GET_MESSAGES,
    payload: IMessage[]
}

export interface ISetMessagesAction extends IAction {
    type: actionTypes.SET_MESSAGES,
    payload: IMessage[]
}

 export interface ISetIsLoading extends IAction{
    type: actionTypes.SET_IS_LOADING,
    payload: boolean
}

export interface ISetIsError extends IAction{
    type: actionTypes.SET_IS_ERROR,
    payload: boolean
}

export interface ISetIsReversed extends IAction {
    type: actionTypes.SET_IS_REVERSED,
    payload: boolean
}

export type action = IGetMessagesAction | ISetMessagesAction | ISetIsError | ISetIsLoading | ISetIsReversed
export type messagesAction = IGetMessagesAction | ISetIsLoading | ISetIsError | ISetMessagesAction
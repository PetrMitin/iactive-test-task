import { messagesAction, actionTypes, ISetIsLoading, ISetIsError, ISetIsReversed, ISetMessagesAction } from "./actionTypes"
import { AppDispatch, useAppSelector } from "../store/store"
import apiUtils from "../../utils/apiUtils"
import { reverseArr } from "../utils/utils"
import { IMessage } from "../utils/myInterfaces"

class actionCreators {
    getMessagesAction = (lastMessageId?: number) => {
        return async (dispatch: AppDispatch<messagesAction>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const messages = await apiUtils.getMessages(lastMessageId)
                const isReversed = !!localStorage.getItem('isReversed')
                dispatch({type: actionTypes.GET_MESSAGES, payload: isReversed ? reverseArr(messages) : messages})
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e)
                    dispatch(this.setIsErrorAction(true))
                }
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    setMessagesAction = (messages: IMessage[]): ISetMessagesAction => {
        return {
            type: actionTypes.SET_MESSAGES,
            payload: messages
        }
    }

    setIsReversedAction = (isReversed: boolean): ISetIsReversed => {
        localStorage.setItem('isReversed', isReversed ? '1' : '')
        return {
            type: actionTypes.SET_IS_REVERSED,
            payload: isReversed
        }
    }

    setIsLoadingAction = (isLoading: boolean): ISetIsLoading => ({
        type: actionTypes.SET_IS_LOADING,
        payload: isLoading
    })

    setIsErrorAction = (isError: boolean): ISetIsError => ({
        type: actionTypes.SET_IS_ERROR,
        payload: isError
    })
}

export default new actionCreators()
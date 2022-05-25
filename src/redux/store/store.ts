import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { messagesAction } from "../actions/actionTypes";
import { messagesReducer } from "../reducers/messagesReducer";

export const store = configureStore({
    reducer: messagesReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch<action> = typeof store.dispatch
export const useAppDispatch = () =>  useDispatch<AppDispatch<messagesAction>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
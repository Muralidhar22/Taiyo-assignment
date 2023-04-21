import { configureStore } from "@reduxjs/toolkit";
import contact from "../features/contact/contactSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const createStore = () => configureStore({
    reducer: {
        contact
    }
})

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
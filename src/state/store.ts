import { configureStore } from "@reduxjs/toolkit";
import todoList from "./todo/todoListSlice"
import todo from "./todo/todoSlice"

export const store = configureStore({
    reducer: {
        todoList,
        todo
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
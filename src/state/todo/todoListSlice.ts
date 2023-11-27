import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TodoState } from "./todoSlice"

interface TodoListState {
    todos: TodoState[]
}

const initialState: TodoListState = {
    todos: []
}

const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, payload: PayloadAction<TodoState>) => {
            state.todos.push(payload.payload)
        },
        addBlankTodo: (state) => {
            state.todos.push({ name: "", isDone: false, description: "" })
        }
    }
})

export const {addTodo, addBlankTodo} = todoListSlice.actions
export default todoListSlice.reducer;
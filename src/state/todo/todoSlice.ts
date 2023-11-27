import { createSlice } from "@reduxjs/toolkit"

export interface TodoState {
    name: string
    isDone: boolean,
    description: string
}

const initialState: TodoState = {
    name: "",
    isDone: false,
    description: "",
}

const todoSlice = createSlice({
    name: "todo",
     initialState,
     reducers: {
        toggleState: (state) => {
            state.isDone = !state.isDone
        }
     }
})

export const {toggleState} = todoSlice.actions;
export default todoSlice.reducer;
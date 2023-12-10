import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TodoState {
    id: number,
    name: string,
    isDone: boolean,
    description: string
}

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
        addTodo: (state, action: PayloadAction<TodoState>) => {
            state.todos.push(action.payload)
        },
        addBlankTodo: (state) => {
            state.todos = [...state.todos, { id: state.todos.length, name: "New To-do Task", isDone: false, description: "No description" }]
            // state.todos.push({ name: "", isDone: false, description: "" })
        },
        removeTodoByID: (state, action: PayloadAction<number>) => {
            // const todoIndex = state.todos.findIndex(todo => todo.id === action.payload)
            state.todos = state.todos.filter(todo => todo.id != action.payload)
            state.todos = state.todos.map<TodoState>((value, index) => {
                const todo = { ...value }
                todo.id = index;
                return todo
            })
        },
        updateTodo: (state, action: PayloadAction<TodoState>) => {
            const selectedId = action.payload.id;
            const todos = state.todos;
            const selectedTodoIdx = todos.findIndex(x => x.id == selectedId)
            todos[selectedTodoIdx] = action.payload

            state.todos = todos;
        },
        updateTodoName: (state, action: PayloadAction<{ id: number, name: string }>) => {
            const selectedId = action.payload.id;
            const todos = state.todos;
            const selectedTodoIdx = todos.findIndex(x => x.id == selectedId)
            todos[selectedTodoIdx].name = action.payload.name

            state.todos = todos;
        },
        updateTodoDescription: (state, action: PayloadAction<{ id: number, description: string }>) => {
            const selectedId = action.payload.id;
            const todos = state.todos;
            const selectedTodoIdx = todos.findIndex(x => x.id == selectedId)
            todos[selectedTodoIdx].description = action.payload.description

            state.todos = todos;
        },
        updateTodoState: (state, action: PayloadAction<{ id: number, state: boolean }>) => {
            const selectedId = action.payload.id;
            const todos = state.todos;
            const selectedTodoIdx = todos.findIndex(x => x.id == selectedId)
            todos[selectedTodoIdx].isDone = action.payload.state

            state.todos = todos;
        },
    }
})

export const { addTodo, addBlankTodo, updateTodo, updateTodoName, updateTodoDescription, updateTodoState, removeTodoByID } = todoListSlice.actions
export default todoListSlice.reducer;
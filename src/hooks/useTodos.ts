import { AppDispatch, RootState } from "../state/store"
import { useSelector, useDispatch } from "react-redux";
import { TodoState, addBlankTodo, updateTodo, updateTodoDescription, updateTodoName, updateTodoState, removeTodoByID } from "../state/todo/todoListSlice";

export const useTodos = () => {
    const todos = useSelector((state: RootState) => state.todoList.todos);
    const dispatch = useDispatch<AppDispatch>();

    const addNewTodo = () => {
        dispatch(addBlankTodo())
    }

    const removeTodo = (id: number) => {
        dispatch(removeTodoByID(id))
    }

    const getTodo = (id: number): TodoState | undefined => {
        return todos.find(todo => todo.id === id)
    }

    const getNewestTodo = (): TodoState | undefined => {
        return todos[todos.length - 1]
    }

    const setTodo = (updatedTodo: TodoState) => {
        dispatch(updateTodo(updatedTodo))
    }

    const setTodoName = (id: number, name: string) => {
        dispatch(updateTodoName({ id, name }))
    }

    const setTodoDescription = (id: number, description: string) => {
        dispatch(updateTodoDescription({ id, description }))
    }

    const setTodoState = (id: number, state: boolean) => {
        dispatch(updateTodoState({ id, state }))
    }

    return { todos, addNewTodo, setTodo, setTodoName, setTodoDescription, setTodoState, removeTodo, getTodo, getNewestTodo } as const
}


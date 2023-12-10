import {useState} from 'react'
import style from "./TodoList.module.css";
import TodoEntry from "./TodoEntry";
import { useTodos } from "../../hooks/useTodos";
import { TodoState } from "../../state/todo/todoListSlice";

interface TodoListProps {
  onTodoAdd?: () => void;
  onTodoRemove?: (prevTodos?: TodoState[], removedTodo?: TodoState) => void;
  onTodoSelect?: (selectedTodo: TodoState | null) => void;
}

const TodoList = ({ onTodoAdd, onTodoRemove, onTodoSelect }: TodoListProps) => {
  const todoList = useTodos();
  const [selectedTodo, setSelectedTodo] = useState<TodoState | null>(null);

  const handleOnTodoCheck = (value: TodoState, newState: boolean) => {
    const newValue = {
      id: value.id,
      name: value.name,
      isDone: newState,
      description: value.description,
    } as const;

    todoList.setTodo(newValue);
  };

  const handleOnTodoSelect = (todoData: TodoState) => {
    
    setSelectedTodo(todoData)

    if (!onTodoSelect) return;
    onTodoSelect(todoData);
  };

  const handleOnTodoDelete = (todoData: TodoState) => {
    console.log(todoList.todos);
    todoList.removeTodo(todoData.id);
    console.log(todoList.todos);

    if (!onTodoRemove) return;
    onTodoRemove(todoList.todos, todoData);
  };

  const handleOnTodoAdd = () => {
    todoList.addNewTodo();

    if (!onTodoAdd) return;
    onTodoAdd();
  };

  return (
    <div className={style.container}>
      <div className={style["button-container"]}>
        <button type="button" onClick={handleOnTodoAdd}>
          Add Todo
        </button>
      </div>

      <div className={style.list}>
        {todoList.todos.map((value, index) => (
          <TodoEntry
            key={index}
            todoData={value}
            isSelected={selectedTodo?.id === value.id}
            onCheck={(newState) => handleOnTodoCheck(value, newState)}
            onSelect={handleOnTodoSelect}
            onDelete={handleOnTodoDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

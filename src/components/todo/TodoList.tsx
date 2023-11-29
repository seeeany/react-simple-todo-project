import style from "./TodoList.module.css";
import TodoEntry from "./TodoEntry";
import { useTodos } from "../../hooks/useTodos";
import { TodoState } from "../../state/todo/todoListSlice";

const TodoList = () => {
  const todoList = useTodos();

  const handleOnTodoCheck = (value: TodoState, newState: boolean) => {
    const newValue = {
      id: value.id,
      name: value.name,
      isDone: newState,
      description: value.description,
    };

    todoList.setTodo(newValue);
  };

  return (
    <div className={style.container}>
      <div className={style["button-container"]}>
        <button type="button" onClick={todoList.addNewTodo}>
          Add Todo
        </button>
      </div>

      <div className={style.list}>
        {todoList.todos.map((value, index) => (
          <TodoEntry
            key={index}
            todoId={value.id}
            name={value.name}
            isDone={value.isDone}
            description={value.description}
            onCheck={(newState) => handleOnTodoCheck(value, newState)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

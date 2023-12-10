import { useState } from "react";

import TodoList from "../components/todo/TodoList";
import { default as Header } from "../components/todo/TodoHeader";
import { default as Sidebar } from "../components/todo/TodoSidebar";
import { default as Content } from "../components/todo/TodoContent";

import style from "./TodoPage.module.css";
import { TodoState } from "../state/todo/todoListSlice";
import TodoDetail from "../components/todo/TodoDetail";
import { useTodos } from "../hooks/useTodos";

const TodoPage = () => {
  const todoList = useTodos();
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  const handleOnTodoSelect = (selectedTodo: TodoState) => {
    if(selectedTodo)
    setSelectedTodoId(selectedTodo.id);
  };

  const getSelectedTodo = () => {
    if (selectedTodoId === null) return null;
    return todoList.getTodo(selectedTodoId);
  };

  return (
    <div className={style.container}>
      <Sidebar>
        <TodoList onTodoSelect={handleOnTodoSelect} />
      </Sidebar>
      <div className={style["content-container"]}>
        <Header>
          <h1>To Do Page</h1>
        </Header>
        <Content>
          {selectedTodoId && <TodoDetail todo={getSelectedTodo()} />}
        </Content>
      </div>
    </div>
  );
};

export default TodoPage;

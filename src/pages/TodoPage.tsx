import TodoList from "../components/todo/TodoList";
import { default as Header } from "../components/todo/TodoHeader";
import { default as Sidebar } from "../components/todo/TodoSidebar";
import { default as Content } from "../components/todo/TodoContent";

import style from "./TodoPage.module.css";

const TodoPage = () => {
  return (
    <div className={style.container}>
      <Sidebar>
        <TodoList />
      </Sidebar>
      <div className={style["content-container"]}>
        <Header>
          <h1>To Do Page</h1>
        </Header>
        <Content></Content>
      </div>
    </div>
  );
};

export default TodoPage;

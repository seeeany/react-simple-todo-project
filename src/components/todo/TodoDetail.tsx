import { useTodos } from "../../hooks/useTodos";
import { TextField } from "@mui/material";
import { TodoState } from "../../state/todo/todoListSlice";

interface TodoDetailProps {
  todo?: TodoState | null;
}

const TodoDetail: React.FC<TodoDetailProps> = ({ todo }) => {
  const todoList = useTodos();

  const handleOnTodoDescriptionUpdate = (updatedText: string) => {
    if(!todo) return

    todoList.setTodoDescription(todo.id, updatedText);
    console.log(updatedText)
  };

  return (
    <div>
      <h2>{todo?.name}</h2>
      <TextField
        value={todo?.description}
        onChange={(e) => handleOnTodoDescriptionUpdate(e.target.value)}
      />
    </div>
  );
};

export default TodoDetail;

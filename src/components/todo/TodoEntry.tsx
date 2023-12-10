import React from "react";
import style from "./TodoEntry.module.css";
import Checkbox from "../ui/Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";
import { useTodos } from "../../hooks/useTodos";
// import { useMousePosition } from "../../hooks/useMousePosition";

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoState } from "../../state/todo/todoListSlice";

interface TodoEntryProps {
  // todoId: number;
  // name: string;
  // isDone: boolean;
  // description?: string;

  todoData: TodoState;
  isSelected?: boolean;
  onCheck?: (value: boolean) => void;
  onSelect?: (todoData: TodoState) => void;
  onDelete?: (todoData: TodoState) => void;
}

function TodoEntry({
  todoData,
  isSelected,
  onCheck,
  onSelect,
  onDelete,
}: TodoEntryProps) {
  const { setTodoName } = useTodos();
  const checkbox = useCheckbox();
  // const mousePosition = useMousePosition();

  const handleOnCheck = () => {
    const newState = checkbox.Toggle();

    if (!onCheck) return;
    onCheck(newState);
  };

  const handleOnChangeLabel = (newLabel: string) => {
    setTodoName(todoData.id, newLabel);
  };

  const checkboxStyle = {
    margin: "5px",
    minWidth: "200px",
  };

  const handleOnEntryClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onSelect) return;
    onSelect(todoData);
  };

  const handleOnDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (!onDelete) return;
    onDelete(todoData);
  };

  return (
    <div className={style.container} onClick={handleOnEntryClick} style={{
      border: isSelected ? "2px solid #bbcdff" : ""
    }}>
      <Checkbox
        label={todoData.name}
        value={todoData.isDone}
        onCheck={handleOnCheck}
        onChangeLabel={handleOnChangeLabel}
        style={checkboxStyle}
        editable
      />
      {todoData.isDone && (
        <div className={style.button}>
          <Button
            onClick={handleOnDelete}
            variant="outlined"
            color="error"
            fullWidth
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default TodoEntry;

import style from "./TodoEntry.module.css";
import Checkbox from "../Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";
import { useTodos } from "../../hooks/useTodos";

interface TodoEntryProps {
  todoId: number,
  name: string;
  isDone: boolean;
  description?: string;
  onCheck?: (value: boolean) => void;
}

function TodoEntry({ todoId, name, isDone, description, onCheck }: TodoEntryProps) {
  const { setTodoName } = useTodos();
  const checkbox = useCheckbox();

  const handleOnCheck = () => {
    const newState = checkbox.Toggle();

    if (!onCheck) return;
    onCheck(newState);
  };

  const handleOnChangeLabel = (newLabel: string) => {
    setTodoName(todoId, newLabel)
  };

  const checkboxStyle = {
    margin: "5px",
    minWidth: "200px",
    // alignItems: "left",
    // alignContent: "left",
    // justifyContent: "flex-end"
  };

  return (
    <div className={style.container}>
      <Checkbox
        label={name}
        value={isDone}
        onCheck={handleOnCheck}
        onChangeLabel={handleOnChangeLabel}
        style={checkboxStyle}
        editable
      />
      <p>
        {description != ""
          ? description
          : "This is an example of a description"}
      </p>
    </div>
  );
}

export default TodoEntry;

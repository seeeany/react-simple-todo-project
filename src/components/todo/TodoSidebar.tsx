import React, { useState, useEffect } from "react";

import "./TodoSideBar.css";
import { useCheckbox } from "../../hooks/useCheckbox";

interface SidebarProps {
  children?: React.ReactNode;
}

function TodoSidebar({ children }: SidebarProps) {
  const { isChecked, Toggle } = useCheckbox();

  const [selectedTodo, setSelectedTodo] = useState<number>(0)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // console.log(e.key);
      if (e.key != "Escape") return;
      Toggle();
    };

    window?.addEventListener("keydown", handleKeyPress);

    return () => {
      window?.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={`todo-sidebar ${isChecked ? "active" : ""}`}
      onClick={() => {
        if (!isChecked) Toggle();
      }}
    >
      <button
        type="button"
        style={{
          height: "25px",
          width: "25px",
          textAlign: "center",
          overflow: "hidden",
          fontSize: "8px",
          marginBottom: "5px",
          alignSelf: "flex-end"
        }}
        onClick={() => {
          if (isChecked) Toggle();
        }}
      >
        X
      </button>

      {children}
    </div>
  );
}

export default TodoSidebar;

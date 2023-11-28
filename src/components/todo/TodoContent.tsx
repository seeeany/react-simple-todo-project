import React from "react";

import "./TodoContent.css";

interface ContentProps {
  children?: React.ReactNode;
}

function TodoContent({ children } : ContentProps) {
  return (
    <div className="todo-content">
      {children}
    </div>
  );
}

export default TodoContent;

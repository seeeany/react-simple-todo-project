import React from 'react'

import "./TodoHeader.css"

interface HeaderProps {
  children?: React.ReactNode
}

function TodoHeader({children} : HeaderProps) {
  return (
    <div className='todo-header'>
        {children}
    </div>
  )
}

export default TodoHeader
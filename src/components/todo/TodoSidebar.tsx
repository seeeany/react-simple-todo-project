import React, { useEffect } from 'react'

import "./TodoSideBar.css"
import { useCheckbox } from '../../hooks/useCheckbox'

interface SidebarProps {
    children? : React.ReactNode
}

function TodoSidebar({children} : SidebarProps) {
    const {isChecked, Toggle} = useCheckbox()

    useEffect(() => {
        const handleKeyPress = (e : KeyboardEvent) => {
            console.log(e.key)
            if(e.key !== "Escape") return;
            Toggle();
        }

      window?.addEventListener('keydown', handleKeyPress)
    
      return () => {
        window?.removeEventListener('keydown', handleKeyPress)
      }
    }, [])
    

  return (
    <div className={`todo-sidebar ${isChecked ? "active" : ""}`} onClick={Toggle}>
        {children}
    </div>
  )
}

export default TodoSidebar
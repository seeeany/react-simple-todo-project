import { useEffect, useState } from "react"


export const useMousePosition = (center? : boolean) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e : MouseEvent) => {
        const mousePosition = { x: e.clientX, y: e.clientY };

        if(center) {
            mousePosition.x -= window.innerWidth / 2
            mousePosition.y -= window.innerHeight / 2
        }

        setPosition(mousePosition)
    }

    useEffect(() => {
        window?.addEventListener('mousemove', handleMouseMove)
        return () => {
            window?.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return position
}
import {useState} from "react"

export const useCheckbox = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const Toggle = () => {
        const newState: boolean = !isChecked;
        setIsChecked(!isChecked)
        return newState;
    }

    return {isChecked, Toggle}
}
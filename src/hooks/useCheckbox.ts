import {useState} from "react"

export const useCheckbox = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const Toggle = () => {
        let newState: boolean = !isChecked;
        setIsChecked((prev) => {
            newState = !prev
            return !prev;
        })
        return newState;
    }

    return {isChecked, Toggle}
}
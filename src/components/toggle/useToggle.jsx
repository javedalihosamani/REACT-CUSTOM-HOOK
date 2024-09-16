import { useState } from 'react'

const useToggle = (toggleValue) => {
    const [value , setValue] = useState(toggleValue);

    const toggle = (value) => {
        /* setValue(currentValue => typeof value === "boolean" ? value : currentValue) */

        setValue((function(currentVal){
            return typeof value === "boolean" ? value : currentVal
        })(value))
        
    }
  return [value, toggle]
}

export default useToggle
import React, { useState } from "react";

function useToggle(initialVal = false){

    const [toggle, setToggle] = useState(initialVal);
    
    const toggleState = () =>{
        setToggle(!toggle)
    }

    return [toggle, toggleState]
}

export default useToggle;
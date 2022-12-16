import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useCustomHooks(init, compName)
{
    const [count,setCount] = useState(init)

    function resetCounter(){
        setCount(count+1)
    }
    useEffect(()=>{alert(`${compName} component button clicked ${count} times`)}, [count,compName])
 
    console.log(`${count} times clicked`)
    return resetCounter;
}
export default useCustomHooks;
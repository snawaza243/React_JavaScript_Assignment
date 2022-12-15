import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Effect_Hook(){

    const [count,setCount] = useState(0);
    useEffect(()=>{document.title=`Chats (${count})`})

    return(
        <>
            <h2 >See title while hit the button</h2>
            <p>Sam you have got {count} chats. </p>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )

}

export default Effect_Hook
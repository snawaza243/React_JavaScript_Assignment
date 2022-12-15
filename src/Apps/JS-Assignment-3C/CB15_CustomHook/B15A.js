// first component of useCustomHook

import React from "react";
import useCustomHooks from "./B15_CustomHooks";
function FirstComp(){
    const clickButton = useCustomHooks(0,'REACT SAM CUSTOM APP')

    return (
        <>
            <h1>First app of custom hook</h1>
            <button onClick={clickButton}>Click here!</button>
        </>
    )
}

export default FirstComp;
import React, { useState } from "react";

const TodoInput=(createTodoItem)=>{
    // destructure createTodoItem
    const [value,setValue] = useState("")
    
    // function
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(value==""){
            return alert("please add something to-do")
        }
        createTodoItem(value)
        setValue("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="create todo"
            value={value} 
            onChange={(e)=>setValue(e.target.value)} />

            <button onClick={handleSubmit}>Create</button>
        </form>
    )
}

export default TodoInput;
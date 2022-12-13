
const TodoItem = ({item,i, deleteTodoItem, completeTodoItem,updateTodoItem}) => {

    return (
        <div>
            {/* This is TodoItem */}
            <li style={{textDecoration: item.complete ? "line-through" : ""}}>{item.todo}</li>
            <div>
                <button onClick={()=>completeTodoItem(i)}>Complete</button> {/* update part 1.3 */}

                <button onClick={()=>{updateTodoItem(i)}}>Update</button>

                <button onClick={()=>deleteTodoItem(i)}>X</button>
            </div>
        </div>
    )
}
export default TodoItem;
import React, { useState } from "react"
import "./App.css"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

function App() {

    const [todoItems, setTodoItems] = useState(
        [
            { todo: 'Mow the lawn', complete: false },
            { todo: 'Do Laundry', complete: false },
            { todo: 'Make Dinner', complete: false }
        ]
    )

    const createTodoItem = (todo) => {
        const newTodoItem = [...todoItems, { todo, complete: false }]
        setTodoItems(newTodoItem)
    }

    // delete item
    const deleteTodoItem = (index) => {
        const newTodoItem = [...todoItems]
        newTodoItem.splice(index, 1)
        setTodoItems(newTodoItem)
    }

    // update part 1

    const completeTodoItem = (index) => {
        const newTodoItem = [...todoItems];
        newTodoItem[index].complete === false ? (newTodoItem[index].complete = true) : (newTodoItem[index].complete = false);
        setTodoItems(newTodoItem)
    }

    const updateTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        const item = newTodoItems[index];
        let newItem = prompt(`Update ${item.todo}?`, item.todo);
        let todoObj = { todo: newItem, complete: false };
        newTodoItems.splice(index, 1, todoObj);
        if (newItem === null || newItem === "") {
        return;
        } else {
        item.todo = newItem;
        }
        setTodoItems(newTodoItems);
        };
    return (
        <div className="app" >
            <TodoInput createTodoItem={createTodoItem} />
            {todoItems.map((item, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    item={item}
                    deleteTodoItem={deleteTodoItem}
                    completeTodoItem = {completeTodoItem}updateTodoItem={updateTodoItem}
                />
            ))}
        </div>
    )
}

export default App
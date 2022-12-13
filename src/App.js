import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import React, { useState } from 'react';


function App() {

  // Read of CRUD
  const [todoItems, setTodoItems] = useState(
    [
      { todo: 'Move the lawn', complete: false },
      { todo: 'Do laundry', complete: false },
      { todo: 'Make dinner', complete: false }
    ]
  )

  // Create of CRUD
  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems)
  }

  // Delete of CRUD
  const deleteTodoItem = (i) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(i, 1)
    setTodoItems(newTodoItems)
  }

  // Update part 1 of CRUD
  const completeTodoItem = (i) => {
    const newTodoItems = [...todoItems];
    newTodoItems[i].complete === false ? (newTodoItems[i].complete = true) : (newTodoItems[i].complete = false);
  }

  // Update part 2 of CRUD
  const updateTodoItem = (i) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[i];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(i, 1, todoObj);

    if (newItem === null || newItem === "") {
      return;
    }
    else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems)
  }
  return (
    <div className="App">
      <TodoInput createTodoItem={createTodoItem} />

      {/* render our list in TodoItem */}
      {todoItems.map((item, i) => (
        <TodoItem
          key={i}
          i={i}
          item={item}
          deleteTodoItem={deleteTodoItem}
          completeTodoItem={completeTodoItem} //update prt 1.2 and update part 1.3 in TodoItem
          updateTodoItem={updateTodoItem} //update 2.2 and 2.3 in TodoItem

        />
      ))}
    </div>
  );
}

export default App;

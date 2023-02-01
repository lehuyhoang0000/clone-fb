import { useState } from "react"

const TodoList = () => {

    const [todoItems , setTodoItems] = useState(["Home Work", "shopping"])
    console.log(todoItems)

    const handleClick = () => {
        setTodoItems([...todoItems, "add list"])
    }

    return <div>
        <button onClick={handleClick}>Add</button>
        <ul>
            <li>{todoItems[0]}</li>
            <li>{todoItems[1]}</li>
        </ul>
    </div>
}

export default TodoList
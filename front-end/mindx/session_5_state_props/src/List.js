import ListItem from "./ListItem"
import { useState } from "react";


const List = () =>{
    const [task1, setTask1] = useState({value:"Home Work", done: false});
    const [task2, setTask2] = useState({value:"Buy Car", done: false});

    const noDoneTask = [task1, task2].filter((task) => !task.done)

    const setDoneTask1 = ( ) =>{
        setTask1({
            ...task1,
            done: true,
        });
    };

    const setDoneTask2 = ( ) =>{
        setTask2({
            ...task2,
            done: true,
        });
    };

    return <div>
        <ListItem value={task1.value} done={task1.done} onClick={setDoneTask1} />
        <ListItem value={task2.value} done={task2.done} onClick={setDoneTask2} />
        <div>Total task left: {noDoneTask.length} </div>
    </div>
}

export default List
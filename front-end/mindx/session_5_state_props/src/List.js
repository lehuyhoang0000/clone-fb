import ListItem from "./ListItem"
import { useState } from "react";


const List = () =>{
    const [taske1, setTaske1] = useState({value:"Home Work", done: false});
    const [taske2, setTaske2] = useState({value:"Buy Car", done: false});

    const noDoneTask = [taske1, taske2].filter((task) => !task.done)

    const setDoneTask1 = ( ) =>{
        setTaske1({
            ...taske1,
            done: true,
        });
    };

    const setDoneTask2 = ( ) =>{
        setTaske2({
            ...taske2,
            done: true,
        });
    };

    return <div>
        <ListItem value={taske1.value} done={taske1.done} onClick={setDoneTask1} />
        <ListItem value={taske2.value} done={taske2.done} onClick={setDoneTask2} />
        <div>Total task left: {noDoneTask.length} </div>
    </div>
}

export default List;
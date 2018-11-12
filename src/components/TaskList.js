import React from 'react'
import TaskItem from "./TaskItem";




const TaskList = (props) => {
    const listElements = props.items.map((item) =>
        <TaskItem key={item.id} item = {item} toogleTask = {props.toogleTask}/>
    );
    return(
        <div className ="TodoList__listArea">
            <ul id ="todoList">
                {listElements}
            </ul>
        </div>
    )
};





export default TaskList
import React from 'react'
import TaskItem from "./TaskItem";




const TasksList = (props) => {
    const listElements = props.items.map((item) =>
        <TaskItem key={item.id} {...item} toogleTask = {props.toogleTask} deleteTask = {props.deleteTask} checkTask = {props.checkTask}/>
    );
    return(
        <div className ="TodoList__listArea">
            <ul id ="todoList">
                {listElements}
            </ul>
        </div>
    )
};





export default TasksList

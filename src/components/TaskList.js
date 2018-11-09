import React from 'react'




const TaskList = (props) => {
    const listElements = props.items.map((item) =>
        <li key={item.id} className={item.isDone ? 'item__done' : 'item__false'}>
            {item.text}
        </li>
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
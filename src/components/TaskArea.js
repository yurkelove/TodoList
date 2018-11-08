import React from 'react'




const TaskArea = () => {
    const listElements = this.props.fixtures.map((elements,index) =>
        <li key={elements.id} className={`todo__elements`}>
            <TaskArea elements = {elements}/>
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



export default TaskArea
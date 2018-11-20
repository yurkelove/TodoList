import React, {PureComponent}  from 'react'



class CheckTasks extends PureComponent{

    render(){
        return(
            <div className={`todoList__deleteItem`}>
                <button className={`delete__tasks`} onClick={this.deleteCheckHandler}>Удалить выбранные задачи</button>
            </div>
        )
    }

    deleteCheckHandler = () => {
        const {deleteCheckTask,id} = this.props;
        deleteCheckTask(id);
    }

}

export default CheckTasks

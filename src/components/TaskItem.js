import React ,{PureComponent}  from  "react";
const cross = String.fromCharCode(10006);
const mark = String.fromCharCode(10004);


class TaskItem extends PureComponent{

    render(){
        return(
        <li className={`todo__item`}>
            {/*вызываем this.props.isDone - так как мы в TaskList - сделали spread operator */}
             <span className={this.props.isDone ? 'item__done' : ''}>
                 {this.props.text}
             </span>
             <button className={`button__item`} onClick ={this.handleClick}>
                {this.props.isDone ? cross : mark }
             </button>
        </li>
        )
    }

    handleClick = () =>{
        // родительсий метод,id
        const {toogleTask,id} = this.props;
        // Вызов метода из родительского елемента
        toogleTask(id);
    }


}


export default TaskItem




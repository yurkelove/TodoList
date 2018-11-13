import React ,{PureComponent}  from  "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const cross = <FontAwesomeIcon icon={faCheck} />;
const mark = <FontAwesomeIcon icon={faTimes} />;


class TaskItem extends PureComponent{

    render(){

        return(

             <li className={`todo__item`}>
                {/* используем this.props.isDone - так как мы в TaskList - сделали spread operator */}
                 <span className={this.props.isDone ? 'item__done' : ''}>
                     {this.props.text}
                 </span>
                 <button className={`delate__item`}>Удалить</button>
                 <button className={`button__item`} onClick ={this.handleClick}>
                    {this.props.isDone ?  cross :  mark   }
                 </button>

            </li>

        )
    }

    handleClick = () =>{
        // Метод из родителя,id
        const {toogleTask,id} = this.props;
        // Вызов метода из родительского елемента
        toogleTask(id);
    }


}


export default TaskItem




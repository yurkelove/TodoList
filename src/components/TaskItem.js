import React ,{PureComponent}  from  "react";
const cross = String.fromCharCode(10006);
const mark = String.fromCharCode(10004);


class TaskItem extends PureComponent{

    render(){
        const {toogleTask} = this.props;
        return(
        <li className={`todo__item`}>
             <span className={toogleTask ? 'item__done' : ''}>
                 {this.props.item.text}
             </span>
             <button className={`button__item`} onClick={this.handleClick}>
                {toogleTask ? cross : mark }
             </button>
        </li>
        )
    }

    handleClick = () =>{
        this.setState({
            isDone : !this.state.isDone
     })
}


}


export default TaskItem




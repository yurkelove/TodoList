import React ,{PureComponent}  from  "react";



class TaskItem extends PureComponent{

    render(){
        const cross = String.fromCharCode(10006);
        const mark = String.fromCharCode(10004);
        return(
        <li className={`todo__item`}>
             <span className={this.props.item.isDone ? 'item__done' : ''}>
                 {this.props.item.text}
             </span>
             <button className={`button__item`} >
                {this.props.item.isDone ? cross : mark }
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




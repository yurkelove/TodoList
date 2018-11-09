import React ,{PureComponent}  from  "react";



class TaskItem extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            isDone: false
    }
    }

    render(){
        const unDone = String.fromCharCode(10006);
        const unFalse = String.fromCharCode(10004);
        return(
        <li className={`todo__item`}>
        <span className={this.props.item.isDone ? 'item__done' : ''}>{this.props.item.text}</span>
        <button className={`button__item`} >
            {this.props.item.isDone ? unDone : unFalse }
        </button>
        </li>
        )
    }

    handleClick = () =>{
        console.log('----',this.state.isDone);
    this.setState({
        isDone : !this.state.isDone
    })
}


}


export default TaskItem




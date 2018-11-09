import React ,{PureComponent}  from  "react";



class TaskItem extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            isDone: false
    }
    }

    render(){
        return(
        <li className={`todo__item`}>
        <span className={this.props.item.isDone ? 'item__done' : ''}>{this.props.item.text}</span>
        <button className={`button__item`} >
            {this.props.item.isDone ? String.fromCharCode(10006) : String.fromCharCode(10004)}
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




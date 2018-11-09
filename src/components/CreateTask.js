import React ,{Component} from 'react'


class CreateTask extends Component{
    constructor(props){
        super(props);

        this.state = {
            isDone : true
        }
    }

    render(){
        // console.log('----',this.props);
        return(
            <section className={`TodoArea`}>
            <div className={`TodoLIst__inputArea`}>
                <input className ={`inputText`} id={`inputId`} type={`text`} placeholder={`Добавить задачу...`}></input>
            </div>
            <div className = {`TodoList__buttonArea`}>
                <button className={`buttonAdd`} onClick={this.handleClick}>Добавить</button>
            </div>

            </section>
        )

    }

    handleClick = () =>{
        console.log('click' , this.state.isDone);
        this.setState({
            isDone : !this.state.isDone
        })
    }




}


export default CreateTask





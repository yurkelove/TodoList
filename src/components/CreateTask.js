import React ,{Component} from 'react'


class CreateTask extends Component{
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }
    render(){
        return(
            <section className={`TodoArea`}>
            <div className={`TodoLIst__inputArea`}>
                <input
                       ref={this.inputElement}
                       className = {`inputText`}
                       id={`inputId`}
                       type={`text`}
                       placeholder={`Добавить задачу...`}
                       onChange={this.handleInput}>
                </input>
            </div>
            <div className = {`TodoList__buttonArea`}>
                <button className={`buttonAdd`} onClick={this.addTask}>Добавить</button>
            </div>

            </section>
        )

    }


    //ref = {this.props.inputElement}

    addTask = () => {
        const {createTasks} = this.props;
        // Вопрос createTasks - из названия  createTasks = {this.createTask} ?
        createTasks('Yes');
    }

    handleInput = () => {
        console.log(this.inputElement.current.value);
    }






}


export default CreateTask





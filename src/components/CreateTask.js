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
                       onKeyPress={this.handleInput}>
                </input>
            </div>
            <div className = {`TodoList__buttonArea`}>
                <button className={`buttonAdd`} onClick={this.handleButton}>Добавить</button>
            </div>

            </section>

        )

    }


    handleInput = (e) => {
        const {createTask} = this.props;
        const inputValue = this.inputElement.current.value;
        if(e.keyCode === 13){
            createTask(inputValue)
        }
    }

    handleButton = () => {
        const {createTask} = this.props;
        const inputValue = this.inputElement.current.value;
        if(inputValue !== ''){
            createTask(inputValue);
        }
    }






}


export default CreateTask





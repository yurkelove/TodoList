import React, {Component} from 'react';


class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inpValue : ''
        };
    }

    render() {
        return(
            <section className={`TodoArea`}>

                <div className={`TodoLIst__inputArea`}>
                    <input
                           className = {`inputText`}
                           value = {this.state.inpValue}
                           id={`inputId`}
                           type={`text`}
                           placeholder={`Введите значение...`}
                           onKeyUp={this.handleInput}
                           onChange={this.onChangeHandle}
                    />
                </div>
                <div className = {`TodoList__buttonArea`}>
                    <button className={`buttonAdd`} onClick={this.handleButton}>Добавить</button>
                </div>

            </section>
        );
    }


    onChangeHandle = (e) => {
        console.log(e.target.value);
        this.setState ({
            inpValue : e.target.value
        });
    };


    handleInput = (e) => {
        const {createTask} = this.props;
        const inputValue = this.state.inpValue;
        if(e.keyCode === 13 && inputValue !== ''){
            createTask(inputValue)
        }

    };

    handleButton = () => {
        const {createTask} = this.props;
        const inputValue = this.state.inpValue;
        if(inputValue !== ''){
            createTask(inputValue);
        }
    }




}


export default CreateTask


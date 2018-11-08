import React ,{Component} from 'react'


class CreateTask extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className={`TodoArea`}>

            <div className={`TodoLIst__inputArea`}>
                <input className ={`inputText`} id={`inputId`} type={`text`} placeholder={`Добавить задачу...`} onKeyDown={this.enterAdd}></input>
            </div>
            <div className = {`TodoList__buttonArea`}>
                <button className={`buttonAdd`} onClick={this.addElement}>Добавить</button>
            </div>

            </section>
        )

    }

    addTask(title){

    }

    addElement(){
        const elem = document.createElement("li");
        const inputValue = document.getElementById('inputId').value;
        const textNode = document.createTextNode(inputValue);
        elem.appendChild(textNode);
        document.getElementById('todoList').appendChild(elem);
    };

    enterAdd(e){
        if(e.keyCode === 13){
            alert('work');
        }
    };

}









export default CreateTask





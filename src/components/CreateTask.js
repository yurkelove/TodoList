import React ,{Component} from 'react'


class CreateTask extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <section className={`TodoArea`}>
            <div className={`TodoLIst__inputArea`}>
                <input className ={`inputText`} id={`inputId`} type={`text`} placeholder={`Добавить задачу...`}></input>
            </div>
            <div className = {`TodoList__buttonArea`}>
                <button className={`buttonAdd`}>Добавить</button>
            </div>

            </section>
        )

    }





}


export default CreateTask





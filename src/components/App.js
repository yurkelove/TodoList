import React ,{Component} from 'react'
import TaskList from './TaskList'
import CreateTask from './CreateTask'
import './css/style.css'
import nanoid from "nanoid";
import EmptyList from './EmptyList'
import RadioButton from './RadioButton'




class App extends Component {
    constructor(props) {
       super(props);
        this.state = {
            tasks: [],
            filter : 'done'
        }
    }

    componentDidMount() {
        let tasksFromLS = this.getLocal();
        console.log(tasksFromLS);
        if(tasksFromLS === undefined ){
            tasksFromLS = [];
        }
        this.setState({
            tasks: tasksFromLS
        });
    };

    getLocal = () => {
        return JSON.parse(localStorage.getItem('tasks'));
    };

    tolocal = () => {
        localStorage.setItem('tasks',JSON.stringify(this.state.tasks));
    };



    createTask = (text) => {
        const taskObj = {
            id: nanoid(),
            text: text,
            isDone:false
        };
        this.state.tasks.push(taskObj);
        this.setState({
            tasks: this.state.tasks,
        },() => {
            this.tolocal();
        });
    };

    deleteTask = (id) => {
        const index = this.state.tasks.findIndex(item => item.id === id);
        this.state.tasks.splice(index,1);
        this.setState({
            tasks: this.state.tasks
        },() => {
            this.tolocal();
        });
    };


    toogleTask = (id) => {
        const task = this.state.tasks.find(task => task.id === id);
        task.isDone = !task.isDone;
        this.setState({
          tasks:this.state.tasks
        },() => {
            this.tolocal();
        });
    };


    //TaskList items = {items} - прокинули в TaskList

    render() {
        const tasksLen = this.state.tasks.length;
        return (
            <div className="TodoList">
                <div className ="TodoList__container">
                    <h1 className = "Todolist__title">Todo List</h1>
                    <div className="TodoList__Area">
                        <div className="TodoList__BOX">
                            <CreateTask
                                createTask = {this.createTask}
                            />
                            {
                                tasksLen ? <TaskList
                                    items = {this.state.tasks}
                                    toogleTask = {this.toogleTask}
                                    deleteTask = {this.deleteTask}
                                /> : <EmptyList/>
                            }
                        </div>
                        <div className="RadioButton__filter">
                            <RadioButton filter = {this.state.filter}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default App


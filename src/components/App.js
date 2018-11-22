import React ,{Component} from 'react'
import TaskList from './TaskList'
import CreateTask from './CreateTask'
import './css/style.css'
import nanoid from "nanoid";
import EmptyList from './EmptyList'
import RadioButton from './RadioButton'
import CheckTask from './CheckTasks'
import {ALL} from '../constants'
import {DONE} from '../constants'
import {NOTDONE} from '../constants'




class App extends Component {
    constructor(props) {
       super(props);
        this.state = {
            tasks: [],
            filter : ALL,
            checkTasks : []
        }
    }

    componentDidMount() {
        let tasksFromLS = this.getLocal();
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

    changeCurrentFilter = (currentFilter) => {
        this.setState({
            filter: currentFilter
        });
    };

    checkTask = (id) => {
      const checkTasks = this.state.checkTasks;
      const index = checkTasks.findIndex(item => item === id);
          if(index !== -1){
              checkTasks.splice(index,1)
          }else{
              checkTasks.push(id)
          }
      this.setState({
          checkTasks : checkTasks
      });

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


    deleteCheckTask = () => {
        const checkMass = this.state.checkTasks;
        const taskFiltr = this.state.tasks.filter(item => {
            //метод - булевое значение , в массиве - булевое значение
            if(this.isInCurrentFilter(item) && checkMass.includes(item.id)) {
                return false;
            }else{
                return true;
            }
        });


        this.setState({
            tasks : taskFiltr
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

    filterItems = () => {
        const filtredItems = this.state.tasks.filter(item => {
           return this.isInCurrentFilter(item);
        });
        return filtredItems;
    };

    // Проверяет соответсвует ли задача текущему выбраному фильтру
    isInCurrentFilter = (item) => {
        const currentFilter = this.state.filter;
        switch (currentFilter) {
            case ALL :
                return true;
            case DONE:
                //item.isDone === true
                return item.isDone;
            case NOTDONE :
                //item.isDone === false
                return !item.isDone;
            default :
                return true;
        }
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
                                    items = {this.filterItems()}
                                    toogleTask = {this.toogleTask}
                                    deleteTask = {this.deleteTask}
                                    checkTask = {this.checkTask}
                                /> : <EmptyList/>
                            }
                        </div>
                        <CheckTask
                                deleteCheckTask = {this.deleteCheckTask}
                        />
                        <div className="RadioButton__filter">
                            <RadioButton
                                filter = {this.state.filter}
                                changeCurrentFilter = {this.changeCurrentFilter}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default App


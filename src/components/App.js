import React ,{Component} from 'react'
import TaskList from './TaskList'
import CreateTask from './CreateTask'
import items from './Fixtures'
import TaskItem from './TaskItem'
import './css/style.css'



class App extends Component {
    constructor(props) {
       super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        this.setState({
            tasks: items
        });
    }



    toogleTask = (id) =>{
      const task = this.state.tasks.find(task => task.id === id);
      task.isDone = !task.isDone;
      this.setState({
          tasks:this.state.tasks
      })
    };

    //TaskList items = {items} - прокинули в TaskList

    render() {
        return (
            <div className="TodoList">
                <div className ="TodoList__container">
                    <h1 className = "Todolist__title">Todo List</h1>
                    <div className="TodoList__Area">
                        <div className="TodoList__BOX">
                            <CreateTask/>
                            <TaskList items = {this.state.tasks} toogleTask = {this.toogleTask}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}








export default App
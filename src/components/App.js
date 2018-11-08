import React ,{Component} from 'react'
import AddButton from './AddButton'
import InputArea from './InputArea'
import TaskArea from './TaskArea'
import Fixtures from './Fixtures'
import './css/style.css'



class App extends Component {
    construtor() {
        this.state = {
            tasks: []
        }
    }
    componentDidMount() {
        this.setState({
            // tasks: Fixtures
        });
    }

    render() {
        return (
            <div className="TodoList">
                <div className ="TodoList__container">
                    <h1 className = "Todolist__title">Todo List</h1>
                    <div className="TodoList__Area">
                        <div className="TodoList__BOX">
                            <InputArea/>
                            <AddButton/>
                            <TaskArea/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}





export default App
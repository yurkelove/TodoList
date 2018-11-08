import React ,{Component} from 'react'
import AddButton from './AddButton'
import InputArea from './InputArea'
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
                        <h2>Место для TodoLista</h2>
                        <div className="TodoList__BOX">
                            {/* Место для инпута */}
                            {/*<InputArea/>*/}
                            {/* Место для кнопки */}
                            {/*<AddButton/>*/}
                            {/* Место для List */}
                            {/*<taskArea/>*/}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default App
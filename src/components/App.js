import React, { Component } from 'react';
import nanoid from 'nanoid';
import TasksList from './TasksList';
import CreateTask from './CreateTask';
import './css/style.css';
import EmptyList from './EmptyList';
import SwitchFilter from './SwitchFilter';
import DeleteTasks from './DeleteTasks';
import { ALL, DONE, NOTDONE } from '../constants';
import { getFromLS, writeToLS } from '../utils';


class App extends Component {
    state = {
      tasks: [],
      filter: ALL,
      checkTasks: [],
    };

    componentDidMount() {
      let tasksFromLS = getFromLS('tasks');
      if (tasksFromLS === undefined) {
        tasksFromLS = [];
      }
      this.setState({
        tasks: tasksFromLS,
      });
    }


    changeCurrentFilter = (currentFilter) => {
      this.setState({
        filter: currentFilter,
      });
    };

    checkTask = (id) => {
      const { checkTasks } = this.state;
      const index = checkTasks.findIndex(item => item === id);
      if (index !== -1) {
        checkTasks.splice(index, 1);
      } else {
        checkTasks.push(id);
      }
      this.setState({
        checkTasks,
      });
    };

    createTask = (text) => {
      const taskObj = {
        id: nanoid(),
        text,
        isDone: false,
      };
      this.state.tasks.push(taskObj);
      this.setState({
        tasks: this.state.tasks,
      }, () => writeToLS('tasks', this.state.tasks));
    };

    deleteTask = (id) => {
      const index = this.state.tasks.findIndex(item => item.id === id);
      this.state.tasks.splice(index, 1);
      this.setState({
        tasks: this.state.tasks,
      }, () => writeToLS('tasks', this.state.tasks));
    };


    deleteCheckedTasks = () => {
      const { checkTasks, tasks } = this.state;
      const filteredTasks = tasks.filter((item) => {
        // метод - булевое значение , в массиве - булевое значение
        if (this.isInCurrentFilter(item) && checkTasks.includes(item.id)) {
          return false;
        }
        return true;
      });
      this.setState({
        tasks: filteredTasks,
      });
    };

    toogleTask = (id) => {
      const task = this.state.tasks.find(taskItem => taskItem.id === id);
      task.isDone = !task.isDone;
      this.setState({
        tasks: this.state.tasks,
      }, () => writeToLS('tasks', this.state.tasks));
    };

    filterItems = () => {
      const filtredItems = this.state.tasks.filter(item => this.isInCurrentFilter(item));
      return filtredItems;
    };

    // Проверяет соответсвует ли задача текущему выбраному фильтру
    isInCurrentFilter = (item) => {
      const currentFilter = this.state.filter;
      switch (currentFilter) {
        case ALL:
          return true;
        case DONE:
          // item.isDone === true
          return item.isDone;
        case NOTDONE:
          // item.isDone === false
          return !item.isDone;
        default:
          return true;
      }
    };


    // TasksList items = {items} - прокинули в TasksList

    render() {
      const tasksLen = this.state.tasks.length;
      return (
            <div className="TodoList">
                <div className ="TodoList__container">
                    <h1 className = "Todolist__title">Todo List</h1>
                    <div className="TodoList__Area">
                        <div className="TodoList__BOX">
                            <CreateTask createTask = {this.createTask}/>
                            {
                                tasksLen
                                  ? <TasksList
                                    items = {this.filterItems()}
                                    toogleTask = {this.toogleTask}
                                    deleteTask = {this.deleteTask}
                                    checkTask = {this.checkTask}
                                    /> : <EmptyList/>
                            }
                        </div>
                        <DeleteTasks deleteCheckedTasks = {this.deleteCheckedTasks}/>
                        <div className="RadioButton__filter">
                            <SwitchFilter
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


export default App;

import React, { PureComponent } from 'react';


class DeleteTasks extends PureComponent {
  render() {
    return (
        <div className={'todoList__deleteItem'}>
            <button className={'delete__tasks'} onClick={this.deleteCheckHandler}>Удалить выбранные задачи</button>
        </div>
    );
  }

  deleteCheckHandler = () => {
    this.props.deleteCheckedTasks();
  }
}

export default DeleteTasks;

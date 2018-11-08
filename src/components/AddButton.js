import React from 'react'


const AddButton = () => {
    return(
        <div className = "TodoList__buttonArea">
            <button className="buttonAdd" onClick={addTo}>Добавить</button>
        </div>
    )
};

function addTo() {
  const elem = document.createElement("li");
  const inputValue = document.getElementById('inputId').value;
  const textNode = document.createTextNode(inputValue);
  elem.appendChild(textNode);
  document.getElementById('todoList').appendChild(elem);
};







export default AddButton
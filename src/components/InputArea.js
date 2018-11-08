import React from 'react'


const InputArea = () => {
    return(
        <div className="TodoLIst__inputArea">
            <input className ="inputText" id={`inputId`} type="text" placeholder={`Добавить задачу...`} onKeyDown={enterBtn}></input>
        </div>
    )
};


function enterBtn(e){
    if(e.keyCode === 13){
        alert('work');
    }
};



export default InputArea
import React  from 'react'


const RadioButton = (props) =>{

   return(

    <form className={`radio__form`}>
       <div className="radio__container">
           <ul className={`radio__buttons`}>
               <li className={`radio_li`}>
                   <label>
                       <input type="radio" value="All" checked={props.filter === "all"}/>
                       All
                   </label>
               </li>
               <li className={`radio_li`}>
                   <label>
                       <input type="radio" value="Done" checked={props.filter === "done"}/>
                       Done
                   </label>
               </li>
               <li className={`radio_li`}>
                   <label>
                       <input type="radio" value="NotDone" checked={props.filter === "notdone"}/>
                       NotDone
                   </label>
               </li>
           </ul>
       </div>
    </form>

   )


};


export default RadioButton
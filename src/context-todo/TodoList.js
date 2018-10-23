import React from 'react'
import TodoContext from "./TodoContext";

const TodoList = () =>{
    return (
    
    <TodoContext> 
        {context => (<div>
    {context.todos.map( todo=>(
        <div key={todo.item}>
            <h5 onClick={context.checkBox} className={todo.completed ? 'completed-item': ''} style={{cursor:'pointer'}}>
                {todo.item}
            </h5>
         </div>
    ))}
    <button onClick={context.clearCompleted}>Clear Completed</button>
    </div>)}
</TodoContext>
    )
}


export default TodoList
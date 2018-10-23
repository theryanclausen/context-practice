import React from 'react'
import TodoContext from "./TodoContext";

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }

    changeHandler = e =>{
        e.preventDefault()
        this.setState({input: e.target.value})
    }


    render(){

        return(
            <TodoContext>{context =>(
            <form onSubmit={e =>{
                e.preventDefault()
                context.addItem(this.state.input)
                this.setState({input: ''})
            }}>
                <input onChange={this.changeHandler} type='text' value={this.state.input} placeholder='Now What?'/>
                <button type='submit'>add item</button>
            </form>)}
            </TodoContext>
        )
    }
}

export default TodoForm
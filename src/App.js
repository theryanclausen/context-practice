import React from "react";
import Context from "./context-counter/Context";
import Todo from './context-todo/Todo'

import "./App.css";

const App = () =>{
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Context is pretty cool</h1>
          <div style={{display:'flex', width:'600px', justifyContent:'space-between'}}>
            <Context />
            <Todo />
            </div>
        </header>
      </div>
    );
  }


export default App;

import React from 'react'
import {TodoItem} from "./TodoItem";
import '../App.css';

export const Todos = (props) => {
    let myStyle = {
        
        minHeight: "70vh",
        margin: "40px auto",
        textAlign: 'center',
        color: '#FFFFFF'
    }
    
    return (
        <div className="container" style={myStyle}>
            <style>{'body { background-image: linear-gradient(to bottom, #ffaddc, #eca6e1, #d5a0e4, #ba9ce7, #9b98e7, #7c9ceb, #569fea, #16a2e6, #00abe0, #00b3d4, #00b9c4, #00bdb1); }'}</style>
            <h3>Todos List</h3>
            {props.todos.length===0? <h4>Your todos will appear here!!</h4>:  
            props.todos.map((todo)=>{
                return (  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>    )  }) } 
        </div>
    )
}

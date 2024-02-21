import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos ,setTodos] = useState([{task : "sample-task",id:uuidv4(),isDone : false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
       setTodos(()=>{
        return [...todos,{task : newTodo,id:uuidv4(),isDone:false}]
       })
       setNewTodo("");
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
        // console.log(event.target.value);
    }
    let deleteTodo = (id)=>{
      let newTodo = todos.filter((todo)=>todo.id != id);
      // console.log(newTodo);
      setTodos(newTodo);
    }
    let markAllDone = ()=>{
       setTodos( (prevTodos)=>
        prevTodos.map((todo)=>{
          return {
            ...todo,
            isDone: true
          }
       }))
    
    }
    let MarkAsDone = (id)=>{
      setTodos( (prevTodos)=>
        prevTodos.map((todo)=>{
          if(todo.id == id){
            return {
              ...todo,
              isDone : true
            }
          }
          else{
            return todo;
          }
        
       }))
    }
   
    return(
      <div>
        <input  placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
        <br /><br />
        <button onClick={addNewTask} >Add Task</button>
        <br /><br /><hr />


        <h4>Task Todo</h4>
        <ul>
          {todos.map((todo)=>(
              <li key={todo.id}>
                <span style={todo.isDone ? {textDecorationLine :"line-through" } : {}}> {todo.task} </span> 
                &nbsp;  &nbsp;  &nbsp;
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;
                <button onClick={()=>MarkAsDone(todo.id)}>Mark As Done</button>
               
                <br /><br />
              </li>
            ))}
        </ul>
        <br />
        <button onClick={markAllDone}>Mark All Done</button>
      </div>
    );
}
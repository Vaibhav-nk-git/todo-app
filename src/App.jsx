import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState,useEffect } from "react"


function App() {
 
const [todos,setTodos]=useState([])
const [todoValue,setTodoValue] =useState('')

function PersistData(newList){
  localStorage.setItem('todos',JSON.stringify({todos:newList}))
}

function handleAddTodo(newTodo){
  const newTodoList = [...todos,newTodo]
  PersistData(newTodoList);
  setTodos(newTodoList);
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo,todoIndex)=>{
    return todoIndex !== index
  })
  PersistData(newTodoList);
  setTodos(newTodoList)
}

function handleEditTodo(index){
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)

}
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos = {todos} />
      
    </>
        
  )
}

export default App

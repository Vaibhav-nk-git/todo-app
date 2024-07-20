import React from 'react'

export default function TodoCard(props) {
    const {children,handleDeleteTodo,index,handleEditTodo} = props
    
  return (
    <div>
        <li className='todoItem'>
        {children}

        <div className='actionContainer'>

        <button onClick={()=>handleEditTodo(index)}>
        <i className="fa-solid fa-pen-to-square"/>
        </button>

        <span style={{ margin: '0px 15px' }}></span>

        <button onClick={()=>{handleDeleteTodo(index)}}>
        <i className="fa-solid fa-trash-can"/>
        </button>

        </div>                    
        </li>
    </div>
  )
}

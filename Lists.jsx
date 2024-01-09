import React from 'react'
import './TodoList.css'
import { CgCloseO } from "react-icons/cg";

const Lists=(props)=> {
  
  return (
    <>
      <div className="todo_style">
        <i />
        <CgCloseO className="fa fa-times" aria-hidden="true" 
            onClick={()=>{
                props.onSelect(props.id)
            }}
        /> 
        <li>{props.text}</li>
      </div>  
    </>
  )
};

export default Lists





import React, { useState } from 'react'
import './TodoList.css'
import Lists from './Lists';

function TodoList() {
  const [inputList,setinputList]=useState();
  const [items,setItems]=useState([]); 

  const itemEvent=(event)=>{
    setinputList(event.target.value)
  };
  const listOfItems=(props)=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setinputList("")
  };
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((areElem,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a Items' onChange={itemEvent} value={inputList}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
           { 
            items.map((itemval,index)=>{
                return <Lists 
                key={index} 
                id={index}
                text={itemval}
                onSelect={deleteItems}/>;
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default TodoList

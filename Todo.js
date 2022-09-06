import React, { useEffect, useState } from 'react'
import List from './Components/List'
import Item from './Components/Item'
import Todoform from './Components/TodoForm'
import './Todo.css'
import Modal from './Components/Modal'


const SAVED_iTEMS = 'saved_Items'

function Todo(){ 
  
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([])

  useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_iTEMS))
    if(savedItems){
      setItems(savedItems)               
    } 
  }, [])

  useEffect(() => {
     localStorage.setItem(SAVED_iTEMS, JSON.stringify(items)) 
  }, [items])
  
  function addOnItems(text){
    let it = new Item(text) 
    setItems([...items, it])
    onHideModal()   
  }

  function onItemDeleted(item){
    let filteredItems = items.filter(it => it.id !== item.id)
    setItems(filteredItems)
  }

  function onDone(item){
    let updatesItems = items.map(it => {
      if(it.id === item.id){
         it.done = !it.done
      }
      return it
    })

    setItems(updatesItems) 
  }

  function onHideModal(){
     setShowModal(false) 
  }

  return (
   <div className= "container">
     
     <header className='header'> 
      <h1>Todo-List</h1> 
      <button onClick={() => {setShowModal(true)}} className='addButton'>+</button>
     </header>  
     
     <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>  
     
     <Modal show={showModal} onHideModal={onHideModal}> <Todoform addOnItems= {addOnItems}></Todoform> </Modal>  
   </div>
  )
}

export default Todo
import React, { useState } from 'react'

function TodoForm(props){
    
    const [text, setText] = useState('')

    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    function addItems(event){
        event.preventDefault()
        if(text){
           props.addOnItems(text)
           setText('')
        }  
    }
    
    return(
       <form>
          <input className='textInput' onChange={handleChange} type="text" value={text}></input>
          <button className='btnForm' onClick={addItems}>Add</button>
       </form>
    )
}

export default TodoForm
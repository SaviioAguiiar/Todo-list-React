import React from 'react'
import Card  from './Card'

function DoneImg(props){
   if(props.done){
      return(
         <img className='itemIcons' src='./images/on.png' alt='done'></img>
      )
   }else{
      return(
         <img className='itemIcons' src='./images/off.png' alt='undone'></img>
      )
   }
}


function ListItem(props){
      return(<li>
         <Card className='item'>
            <div>
              <span className='showMeTheDay'>{props.item.date}</span>
              <div className={props.item.done ? 'done'  : ''}>
                {props.item.text}
              </div>
            </div>  
            <div>
              <button onClick={() => {props.onDone(props.item)}}> <DoneImg done={props.item.done}></DoneImg> </button>
              <button onClick={() => {props.onItemDeleted(props.item)}}>
                <img className='itemIcons' src='./images/delete.png' alt='delete'></img>
              </button>
            </div>    
         </Card>
         
         </li>
      )
}

export default ListItem
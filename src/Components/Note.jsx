import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { BsPenFill } from "react-icons/bs";
const Note = ({index,title,delNote ,changeCurrent}) => {
  return (
    <div className='note'>
        <h3>{title}</h3>
        <button onClick={()=>delNote(index)} className='del'><AiFillDelete /></button>
        <button onClick={()=>changeCurrent(index)} className='edit'><BsPenFill /></button>
        
        
    </div>
  )
}

export default Note
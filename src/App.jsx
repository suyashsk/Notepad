import MDEditor, { title } from '@uiw/react-md-editor';
import './App.css'
import { useEffect, useState } from 'react';
import Note from './Components/Note';

function App() {


  const[notes,setNotes] = useState([
    // {
    // title:"# Enter Title here",
    // content:"# Enter Title here"
    // }
]);
  const[currentNote,setCurrentNote] = useState(0);

  

  const addNote = () =>{
    setNotes([...notes,{
      title:"# Enter Title here",
      content:"# Enter Title here"
    }])
  }

  const deleteNote = (index) =>{
    
    let temp = [...notes];
    temp.splice(index,1);
    setNotes(temp);
    localStorage.setItem("notes",JSON.stringify(temp))
  }
  const changeCurrent = (index) =>{
    setCurrentNote(index)
  }
  console.log(currentNote);
  
  const modifyCurrentNote = (text) =>{
    let temp = [...notes]
    temp[currentNote].content = text;
    temp[currentNote].title = text.split("\n")[0];
    setNotes(temp);
  }
  useEffect(()=>{
    if(notes.length>0)
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

  useEffect(()=>{
    if(localStorage.getItem("notes")){
      const arr = JSON.parse(localStorage.getItem("notes"))
      setNotes(arr);
    }
  },[]);

  function handleNotes(){
   
    setNotes([...notes,{
      title:"#Enter Title here",
      content:"#Enter Title here"
    }])
  }

  return (
    <>
    {notes.length>0 ? 
      <div style={{display:"flex",justifyContent:"space-between" }}>
        
        <div style={{width:"20%"}}>
          <div style={{display:"flex",alignItems:"center", justifyContent:"center",gap:"1.5em"}}>
        <h1>NOTES</h1>
        <button onClick={addNote} style={{padding:"8px" , borderRadius:"50%" , fontSize:"1.5em" , border:"none", color:"white" ,backgroundColor:"#3c91e6"}}>+</button>
        </div>
        {
          notes.map((item,index)=>{
            return(
              <Note title={item.title} index={index} delNote={deleteNote} changeCurrent={changeCurrent}/>
              
            )
          })
        }
        </div>
        <div style={{flexGrow:"1",height:"600px"}}>
          <MDEditor 
            value={notes[currentNote].content} 
            onChange={(value) =>modifyCurrentNote(value) }
            height="100%" />
        </div>
       
        
      </div> 
      :<div className='No'>
        <h1>You have no notes</h1>
       <button className='cret' onClick={handleNotes}>Create one now</button>
       </div>
      } 
      </>
  )
}

export default App

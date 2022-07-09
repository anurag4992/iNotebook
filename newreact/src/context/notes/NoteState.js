import React, { useState } from "react";
import NoteContext from './noteContext'

const NoteState = (props) => {

  const host = "http://localhost:8000"

  const [notes, setNotes] = useState([])

  const getNote = async (token) => {
  
    //api call
    const response = await fetch(`${host}/api/notes/fetchallNotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    });
    const json = await response.json();
    //api call ends

    setNotes(json)

  }

  const addNote = async (title, description, tag, token) => {
  
    //api call
   const response = await fetch(`${host}/api/notes/addNote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify({title, description, tag}) 
    });
    //api call ends
    const json = await response.json()
    setNotes(notes.concat(json))
    
  }

  const deleteNote = async (id, token) => {
    
    //api call
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    });
    
    const json = await response.json(); 
    console.log(json);
    //api call end

    const newNotes = notes.filter((note) => {return note._id!==id})
    setNotes(newNotes)
  }

  const editNote = async (id, title, description, tag, token) => {
    
    //api call
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const json = await response.json(); 
    console.log(json);
    //api call end
    const newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if(element._id === id){
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag;
        break;
      }
    }
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
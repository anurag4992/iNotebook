import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';


const Addnote = (props) => {
    const { addNote } = useContext(NoteContext);
    const [note, setNote]= useState({title: "", description: "", tag: ""})

    const handleChange =(e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag, localStorage.getItem("token"));
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added successfully", "success")
    }

  return (
    <div>
        <h2>Add a note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' onChange={handleChange} aria-describedby="emailHelp" minLength={3} required value={note.title}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={handleChange} minLength={5} required value={note.description}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" onChange={handleChange} required value={note.tag}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length<5 || note.description.length<5}>Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
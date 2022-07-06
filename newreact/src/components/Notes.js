import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const { notes, setNotes } = useContext(NoteContext);

    return (
        <div className='row my-3'>
        <h2 className='my-3'>View all notes</h2>
        {notes.map((note) => {
            return <>
              <Noteitem note={note} />
            </>
          })}
    </div>
    )
}

export default Notes